import React, { useState } from "react";
import {
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  useTranslate,
  useCreate,
  useGetList,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

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

  const onCreateHandler = async (data: any) => {
    console.log(isseusStatus);

    if (issueId) {
      let payload = {
        issueId: 1,
        statusId: 1,
        type: "Open",
        priority: "High",
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
    <SimpleForm
      key={key}
      onSubmit={onCreateHandler}
      className="grid-col-12 w-full !px-0"
    >
      <div className="col-span-12 w-full">
        <TextInput source="title" label="Title" />
      </div>

      <div className="col-span-12 w-full">
        <SelectInput
          defaultValue={1}
          source="statusId"
          choices={isseusStatus}
          validate={required()}
          label={t("ticket.common.assignee")}
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
    </SimpleForm>
  );
};

export default IssueViewCreate;
