import { useState } from "react";
import {
  Edit,
  SimpleForm,
  SelectInput,
  required,
  SaveButton,
  TextInput,
  Toolbar,
  useTranslate,
  useGetList,
  useUpdate,
} from "react-admin";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { RootDispatch } from "@/store";
import { toggleDialog } from "@/store/slice/sliceDialog";

const IssueViewConfirmEdit = (props: any) => {
  const { data: priorities } = useGetList<any>("priorities");
  const { data: labels } = useGetList<any>("labels");
  const { data: assignes } = useGetList<any>("assignes");
  const dispatch = useDispatch<RootDispatch>();
  const [update] = useUpdate();
  const t = useTranslate();
  const [key, setKey] = useState<number>(0);

  const onSubmitHandler = async (data: any) => {
    if (data.id) {
      let payload = {
        ...props.issue,
        assigne: data.assigne,
        label: data.label,
        priority: data.priority,
        title: data.title,
      };

      try {
        await update(
          "issues-datas",
          { id: data.id, data: payload },
          {
            onSuccess: () => {
              console.log("Check upload");
              setKey(key+1);
              dispatch(toggleDialog());
            },
          },
        );
      } catch (e) {
        console.log("Error while saving data.");
      }
    }
  };

  const onCancelHandler = () => {
    setKey(key+1);
    props.onCancel(null);
    dispatch(toggleDialog());
  };

  return (
    <Edit key={key} className="lg:w-[350px]" id={props.issue.id}>
      <SimpleForm
        onSubmit={onSubmitHandler}
        toolbar={
          <Toolbar className="!px-[16px]">
            <div className="flex justify-between w-full">
              <Button
                onClick={onCancelHandler}
                variant="contained"
                color="error"
              >
                {t("ra.action.cancel")}
              </Button>
              <div className="flex gap-4 items-center">
                <SaveButton />
              </div>
            </div>
          </Toolbar>
        }
      >
        <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full">
          <TextInput source="title" label={t("issue.form.title")} />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full">
          <SelectInput
            defaultValue={1}
            source="priority"
            choices={priorities}
            validate={required()}
            label={t("issue.form.priority")}
            optionValue="id"
          />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full">
          <SelectInput
            defaultValue={1}
            source="label"
            choices={labels}
            validate={required()}
            label={t("issue.form.label")}
            optionValue="id"
          />
        </div>

        <div className="w-full">
          <SelectInput
            defaultValue={1}
            source="assigne"
            choices={assignes}
            validate={required()}
            label={t("issue.form.priority")}
            optionValue="id"
          />
        </div>
      </SimpleForm>
    </Edit>
  );
};

export default IssueViewConfirmEdit;
