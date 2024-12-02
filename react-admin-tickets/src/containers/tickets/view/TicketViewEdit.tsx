import { useMemo } from "react";
import {
  EditBase,
  SimpleForm,
  TextInput,
  SelectInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  SaveButton,
  DeleteButton,
  useUpdate,
  useDelete,
} from "react-admin";
import { statuses, priorities } from "../constants/model";
import { RichTextInput } from "ra-input-rich-text";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface TicketViewEditProps {
  id?: string;
  closeViewEdit?: () => void;
}

const TicketViewEdit = (props: TicketViewEditProps | any) => {
  const model: string = useMemo(() => "tickets", []);
  const [update] = useUpdate(model);
  const [deleteOne] = useDelete();

  const onSubmitHandler = async (data: any) => {
    try {
      await update(
        model,
        { id: props.id ? props.id : data.id, data },
        {
          onSuccess: () => {
            props.closeViewEdit();
          },
          // onFailure: (error: any) => {
          //   console.log(error.message);
          // },
        },
      );
    } catch (e) {
      console.log("Error while saving data.");
    }
  };

  const handleDelete = async () => {
    if (props.id) {
      deleteOne(
        model,
        { id: props.id },
        {
          onSuccess: () => {
            props.closeViewEdit();
          },
          onError: (error) => {
          },
        },
      );
    }
  };

  return (
    <EditBase redirect={false} className="!border-0" title=" " id={props.id}>
      <SimpleForm
        onSubmit={onSubmitHandler}
        toolbar={
          <>
            <SaveButton label="Edit" />
            <DeleteButton onClick={handleDelete} label="Delete" />
          </>
        }
      >
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12 mb-4">
            <h2 className="flex gap-2 items-center justify-between text-lg w-full">
              <span>Edit ticket</span>
              <CloseIcon
                fontSize="small"
                className="cursor-pointer"
                onClick={() => props.closeViewEdit()}
              />
            </h2>
          </div>

          <div className="col-span-12">
            <TextInput source="title" label="Title" />
          </div>

          <div className="col-span-12">
            <SelectInput source="status" choices={statuses} label="Status" />
          </div>
          <div className="col-span-12">
            <SelectInput
              source="priority"
              choices={priorities}
              label="Priority"
            />
          </div>

          <div className="col-span-12">
            <ReferenceInput
              source="assignee.id"
              reference="users"
              label="Assignee ID"
            >
              <TextInput source="assignee.name" />
            </ReferenceInput>
          </div>

          <div className="col-span-12">
            <TextInput source="assignee.email" label="Assignee Email" />
          </div>

          <div className="col-span-12">
            <ReferenceInput
              source="reporter.id"
              reference="users"
              label="Reporter ID"
            >
              <TextInput source="reporter.name" />
            </ReferenceInput>
          </div>

          <div className="col-span-12">
            <TextInput source="reporter.email" label="Reporter Email" />
          </div>

          <div className="col-span-12">
            <DateInput source="createdAt" label="Created At" />
          </div>
          <div className="col-span-12">
            <DateInput source="updatedAt" label="Updated At" />
          </div>

          <div className="col-span-12 bg-[#f5f5f5] p-4 rounded-[0.8rem]">
            <ArrayInput source="labels" label="Labels">
              <SimpleFormIterator>
                <TextInput source="" label="Label" />
              </SimpleFormIterator>
            </ArrayInput>
          </div>

          <div className="col-span-12 bg-[#f5f5f5] p-4 rounded-[0.8rem]">
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
    </EditBase>
  );
};

export default TicketViewEdit;
