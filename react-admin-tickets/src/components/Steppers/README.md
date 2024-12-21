# HorizontalStepperDefault:

    1) Import:
        import { HorizontalStepperDefault } from "@/components/Steppers/index";

    2) Setup stepper:
        const steps = [
            {
                key: "infor",
                label: "Product information",
            },
            {
                key: "detail",
                label: "Product detail",
            },
            {
                key: "done",
                label: "Done",
            },
        ];

    3) Setup data:
        const stepContents: any = useMemo(() => {
            return {
                infor: {
                    first: true,
                    valiad: ["field1", "field2"],
                    inputs: [
                        {
                            className: "col-span-12 lg:col-span-6 w-full",
                            elm: <TextInput source="field1" label="Field 1" validate={required()} />
                        },
                        {
                            className: "col-span-12 lg:col-span-6 w-full",
                            elm: <TextInput source="field2" label="Field 2" validate={required()} />
                        },
                    ],
                    views: [],
                },
                detail: {
                    valiad: [],
                    inputs: [
                        {
                            className: "col-span-12 lg:col-span-6 w-full",
                            elm: <TextInput source="field3" label="Field 3" validate={required()} />
                        },
                        {
                            className: "col-span-12 lg:col-span-6 w-full",
                            elm: <TextInput source="field4" label="Field 4" validate={required()} />,
                        },
                    ],
                    views: [],
                },
                done: {
                    end: true,
                    valiad: [],
                    views: [
                        {
                            className: "col-span-12 lg:col-span-6 w-full",
                            elm: <div>Test</div>,
                        },
                    ],
                },
            };
        }, []);

    4) Setup props:
        <HorizontalStepperDefault resource="products" steps={steps} stepperViews={stepContents} />