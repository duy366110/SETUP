import React, { useState } from "react";
import {
  CreateBase,
  SaveButton,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  Toolbar,
  useTranslate,
  useCreate,
  useGetList,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { Button } from "@mui/material";
import { IssueViewCreateProps } from "./IssueView.type";

const IssueViewCreate: React.FC<IssueViewCreateProps> = ({
  closeDrawer = () => {},
  issueId = 0,
}) => {
  const [create] = useCreate();
  const t = useTranslate();
  const [key, setKey] = useState(0);

  const { data: isseusStatus } = useGetList<any>("issues-status", {
    filter: { issueId },
    // sort: { field: 'date', order: 'DESC' },
    // pagination: { page: 1, perPage: 50 },
  });

  const { data: priorities } = useGetList<any>("priorities");
  const { data: labels } = useGetList<any>("labels");

  const onCreateHandler = async (data: any) => {
    console.log(isseusStatus);

    if (issueId) {
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
              closeDrawer();
            },
          },
        );
      } catch (e) {
        console.log("Error while saving data.");
      }
    }
  };

  return (
    <CreateBase>
      <SimpleForm
        key={key}
        onSubmit={onCreateHandler}
        className="w-full p-4"
        toolbar={
          <Toolbar className="!px-[16px]">
            <div className="flex justify-between w-full">
              <Button
                onClick={() => closeDrawer()}
                variant="contained"
                color="error"
              >
                {t("ra.action.cancel")}
              </Button>
              <div className="flex gap-4 items-center">
                {/* <DeleteButton className="!py-2" /> */}
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
    </CreateBase>
  );
};

export default IssueViewCreate;
