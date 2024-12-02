import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  useRedirect,
  useTranslate,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { statuses, priorities } from "../constants/model";

const TicketPageCreate = () => {
  const redirect = useRedirect();
  const translate = useTranslate();

  return (
    <Create
      className="mt-16 md:mt-0"
      redirect="list"
    >
      <SimpleForm>
        <div className="col-span-12 mb-4">
          <h2 className="flex gap-2 items-center text-lg">
            <ArrowBackIosNewIcon
              fontSize="small"
              className="cursor-pointer"
              onClick={() => redirect("/tickets")}
            />
            <span>{translate("ticket.form.create")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <TextInput source="title" label={translate("ticket.common.title")} />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <SelectInput source="status" choices={statuses} label={translate("ticket.common.status")} />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <SelectInput
              source="priority"
              choices={priorities}
              label={translate("ticket.common.priority")}
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <ReferenceInput
              source="assignee.id"
              reference="users"
              label={translate("ticket.common.assignee")}
            >
              <TextInput source="assignee.name" label={translate("ticket.common.assignee")} />
            </ReferenceInput>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <TextInput source="assignee.email" label={translate("ticket.common.assigneeEmail")} />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <ReferenceInput
              source="reporter.id"
              reference="users"
              label="Reporter ID"
            >
              <TextInput source="reporter.name" label={translate("ticket.common.reporter")} />
            </ReferenceInput>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <TextInput source="reporter.email" label={translate("ticket.common.reporterEmail")} />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <DateInput source="createdAt" label={translate("ticket.common.createdAt")} />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <DateInput source="updatedAt" label={translate("ticket.common.updatedAt")} />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#f5f5f5] p-4 rounded-[0.8rem]">
            <ArrayInput source="labels" label={translate("ticket.common.label")}>
              <SimpleFormIterator>
                <TextInput source="" label={translate("ticket.common.label")} />
              </SimpleFormIterator>
            </ArrayInput>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#f5f5f5] p-4 rounded-[0.8rem]">
            <ArrayInput source="comments" label={translate("ticket.common.comment")}>
              <SimpleFormIterator>
                <TextInput source="" label={translate("ticket.common.comment")} />
              </SimpleFormIterator>
            </ArrayInput>
          </div>

          <div className="col-span-12">
            <RichTextInput
              className="ra-rich-text-editor"
              source="description"
              label={translate("ticket.common.description")}
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

export default TicketPageCreate;
