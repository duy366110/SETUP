import React, { useState } from "react";
import {
  Edit,
  SaveButton,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  Toolbar,
  useTranslate,
  useUpdate,
  useGetList,
  useRedirect,
} from "react-admin";
import { useParams } from "react-router-dom";
import { RichTextInput } from "ra-input-rich-text";
import { Button } from "@mui/material";

const IssuePageEdit: React.FC<any> = (props: any) => {
  const [update] = useUpdate();
  const { id } = useParams();
  const t = useTranslate();
  const redirect = useRedirect();
  const [key, setKey] = useState(0);

  const { data: isseusStatus } = useGetList<any>("issues-status", {
    filter: { issueId: 1 },
  });

  const { data: priorities } = useGetList<any>("priorities");
  const { data: labels } = useGetList<any>("labels");
  const { data: assignes } = useGetList<any>("assignes");

  const onEditHandler = async (data: any) => {
    if (data) {
      try {
        await update(
          "issues-datas",
          { id: data.id, data },
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
    <Edit id={id} resource="issues-datas" redirect="list">
      <SimpleForm
        key={key}
        onSubmit={onEditHandler}
        toolbar={
          <Toolbar className="!px-[16px]">
            <div className="flex justify-between w-full">
              <Button
                color="error"
                onClick={() => redirect("/issues")}
                variant="contained"
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
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full">
            <TextInput source="title" label={t("issue.form.title")} />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full">
            <SelectInput
              defaultValue={1}
              source="statusId"
              choices={isseusStatus}
              validate={required()}
              label={t("issue.form.status")}
              optionValue="id"
            />
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

          <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full">
            <SelectInput
              defaultValue={1}
              source="assigne"
              choices={assignes}
              validate={required()}
              label={t("issue.form.priority")}
              optionValue="id"
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
    </Edit>
  );
};

export default IssuePageEdit;
