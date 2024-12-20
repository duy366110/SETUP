import React, { useState, useMemo } from "react";
import {
  Create,
  DateTimeInput,
  SimpleForm,
  SaveButton,
  TextInput,
  SelectInput,
  required,
  useTranslate,
  Toolbar,
  useGetList,
  useRedirect,
  useCreate,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { Button } from "@mui/material";

const IssuePageCreate: React.FC<any> = (props: any) => {
  const [create] = useCreate();
  const t = useTranslate();
  const [key, setKey] = useState(0);

  const { data: isseusStatus } = useGetList<any>("issues-status", {
    filter: { issueId: 1 },
  });

  const { data: priorities } = useGetList<any>("priorities");
  const { data: labels } = useGetList<any>("labels");
  const { data: assignes } = useGetList<any>("assignes");
  const redirect = useRedirect();

  const currentDate = useMemo(() => {
    return new Date().toISOString();
  }, []);

  const onCreateHandler = async (data: any) => {
    if (1) {
      let payload = {
        issueId: 1,
        statusId: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...data,
      };

      try {
        await create(
          "issues-datas",
          { data: payload },
          {
            onSuccess: () => {
              setKey(key + 1);
              redirect("/issues");
            },
          },
        );
      } catch (e) {
        console.log("Error while saving data.");
      }
    }
  };

  return (
    <Create redirect="list">
      <SimpleForm
        key={key}
        onSubmit={onCreateHandler}
        toolbar={
          <Toolbar className="!px-[16px]">
            <div className="flex justify-between w-full">
              <Button
                onClick={() => redirect("/issues")}
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
        <div className="grid grid-cols-12">
          <div className="col-span-12 w-full">
            <TextInput source="title" label={t("issue.form.title")} />
          </div>

          <div className="col-span-12 w-full">
            <SelectInput
              defaultValue={1}
              source="statusId"
              choices={isseusStatus}
              validate={required()}
              label={t("issue.form.status")}
              optionValue="id"
            />
          </div>

          <div className="col-span-12 w-full">
            <SelectInput
              defaultValue={1}
              source="priority"
              choices={priorities}
              validate={required()}
              label={t("issue.form.priority")}
              optionValue="id"
            />
          </div>

          <div className="col-span-12 w-full">
            <SelectInput
              defaultValue={1}
              source="label"
              choices={labels}
              validate={required()}
              label={t("issue.form.label")}
              optionValue="id"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full">
            <SelectInput
              defaultValue={1}
              source="assigne"
              choices={assignes}
              validate={required()}
              label={t("ticket.common.assignee")}
              optionValue="id"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full">
            <DateTimeInput
              source="dule_date"
              label={t("issue.form.dueDate")}
              defaultValue={currentDate}
            />
          </div>

          <div className="col-span-12 w-full">
            <RichTextInput
              className="ra-rich-text-editor"
              source="description"
              label={t("ticket.common.description")}
              sx={{
                "& .ql-container": {
                  minHeight: "350px",
                },
              }}
              fullWidth
            />
          </div>
        </div>
      </SimpleForm>
    </Create>
  );
};

export default IssuePageCreate;
