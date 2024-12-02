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
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { statuses, priorities } from "../constants/model";

const TicketPageCreate = () => {
  const redirect = useRedirect();

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
            <span>Create ticket</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <TextInput source="title" label="Title" />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <SelectInput source="status" choices={statuses} label="Status" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <SelectInput
              source="priority"
              choices={priorities}
              label="Priority"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <ReferenceInput
              source="assignee.id"
              reference="users"
              label="Assignee ID"
            >
              <TextInput source="assignee.name" />
            </ReferenceInput>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <TextInput source="assignee.email" label="Assignee Email" />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <ReferenceInput
              source="reporter.id"
              reference="users"
              label="Reporter ID"
            >
              <TextInput source="reporter.name" />
            </ReferenceInput>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <TextInput source="reporter.email" label="Reporter Email" />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <DateInput source="createdAt" label="Created At" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <DateInput source="updatedAt" label="Updated At" />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#f5f5f5] p-4 rounded-[0.8rem]">
            <ArrayInput source="labels" label="Labels">
              <SimpleFormIterator>
                <TextInput source="" label="Label" />
              </SimpleFormIterator>
            </ArrayInput>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#f5f5f5] p-4 rounded-[0.8rem]">
            <ArrayInput source="comments" label="Comments">
              <SimpleFormIterator>
                <TextInput source="" label="Comment" />
              </SimpleFormIterator>
            </ArrayInput>
          </div>

          <div className="col-span-12">
            <RichTextInput
              className="ra-rich-text-editor"
              source="description"
              label="Description"
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
