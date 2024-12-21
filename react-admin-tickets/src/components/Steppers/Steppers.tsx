import React, { useState } from "react";
import { Create, SimpleForm, useNotify, useTranslate } from "react-admin";
import { useFormContext } from "react-hook-form";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { StepType, SteppersHorizontal, SteppersType } from "./Steppers.type";

const RendeViewStepper = ({ viewStepper }: any) => {
  return (
    <div className="grid grid-cols-12 gap-2">
      {viewStepper.inputs &&
        viewStepper.inputs.length > 0 &&
        viewStepper.inputs.map((input: any, index: number) => {
          return <div key={index} className={`${input.className}`}>{input.elm}</div>;
        })}

      {viewStepper.views &&
        viewStepper.views.length > 0 &&
        viewStepper.views.map((view: any, index: number) => {
          return <div key={index} className={`${view.className}`}>{view.elm}</div>;
        })}
    </div>
  );
};

const HorizontalStepper: React.FC<SteppersHorizontal> = ({
  steps = [],
  stepperViews = [],
}) => {
  const { trigger }: any = useFormContext();
  const notify = useNotify();
  const t = useTranslate();

  const [activeStep, setActiveStep] = useState(0);
  const [validStep, setValidStep] = useState<boolean>(true);

  const handleNext = async () => {
    let step: any = steps[activeStep];
    let viewStep: any = stepperViews[step.key];
    let valids: Array<boolean> = [];

    for (let key of viewStep.valiad) {
      const isValid = await trigger(key);
      valids.push(isValid);
    }

    if (valids.every((valid: boolean) => valid === true)) {
      notify(t("stepper.valid"), { type: "success" });
      setValidStep(true);
      setActiveStep((prev) => prev + 1);
    } else {
      notify(t("stepper.inValid"), { type: "warning" });
      setValidStep(false);
    }
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Box className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step: any, index: number) => {

          const labelProps: { optional?: React.ReactNode; error?: boolean;} = {};
          if (!validStep && index === activeStep) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                {t("stepper.inValid")}
              </Typography>
            );
            labelProps.error = true;
          }

          return (
            <Step key={step.key}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Box sx={{ mt: 2 }}>
        {steps &&
          steps.length > 0 &&
          steps.map((step: StepType | any, index: number) => {
            return (
              activeStep === index && (
                <RendeViewStepper
                  key={step.key}
                  viewStepper={stepperViews[step.key]}
                />
              )
            );
          })}

        <Box className="flex justify-between">
          <Button disabled={activeStep === 0} onClick={handleBack}>
            {t("stepper.back")}
          </Button>
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1
              ? t("stepper.complete")
              : t("stepper.next")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const StepperHorizontal: React.FC<SteppersType> = ({
  resource = "",
  steps = [],
  stepperViews = [],
  type = "horizontal",
}) => (
  <Create resource={resource}>
    <SimpleForm toolbar={<></>}>
      {type === "horizontal" && (
        <HorizontalStepper steps={steps} stepperViews={stepperViews} />
      )}
    </SimpleForm>
  </Create>
);

export default StepperHorizontal;
