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
  required,
  useUpdate,
  useDelete,
  useTranslate,
  useGetList,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { EmailRegex } from "@/constants/Regexs";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";

interface TicketViewEditProps {
  id?: string;
  closeViewEdit?: () => void;
}

const TicketViewEdit = (props: TicketViewEditProps | any) => {
  const model: string = useMemo(() => "tickets", []);
  const { data: statuses, isLoading: isLoadingStatus }: any = useGetList<any>("statuses");
  const { data: priorities, isLoading: isLoadingPriority }: any = useGetList<any>("priorities");
  const { data: assignes, isLoading: isLoadingAssignes }: any = useGetList<any>("assignes");
  const t = useTranslate();
  const [update] = useUpdate(model);
  const [deleteOne] = useDelete();

  const mode: any = useSelector<RootState>(
    (state: any) => state.mode,
  );

  const validateReporterEmail = (value: any, allValues: any) => {
    if (allValues.reporter.name) {
      if (!value) {
        return required()(value, allValues);
      }

      if (!EmailRegex.test(value)) {
        return t("common.message.error.email");
      }
    }
    return undefined;
  };

  const onSubmitHandler = async (data: any) => {
    try {
      await update(
        model,
        { id: props.id ? props.id : data.id, data },
        {
          onSuccess: () => {
            props.closeViewEdit();
          },
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
          onError: (error) => {},
        },
      );
    }
  };

  return (
    <EditBase redirect={false} className="!border-0" title=" " id={props.id}>
      <SimpleForm
        onSubmit={onSubmitHandler}
        toolbar={
          <div className={`${mode.type === "light" ? "bg-[#f5f5f5]" : "bg-[#42424230]"} flex justify-between p-4`}>
            <SaveButton label={t("common.button.save")} />
            <DeleteButton
              onClick={handleDelete}
              label={t("common.button.delete")}
            />
          </div>
        }
      >
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-12 mb-4">
            <h2 className="flex gap-2 items-center justify-between text-lg w-full">
              <span>{t("ticket.form.edit")}</span>
              <CloseIcon
                fontSize="small"
                className="cursor-pointer"
                onClick={() => props.closeViewEdit()}
              />
            </h2>
          </div>

          <div className="col-span-12">
            <TextInput
              source="title"
              label={t("ticket.common.title")}
              validate={required()}
            />
          </div>

          <div className="col-span-12">
            <SelectInput
              source="status"
              choices={statuses}
              label={t("ticket.common.status")}
              validate={required()}
            />
          </div>
          <div className="col-span-12">
            <SelectInput
              source="priority"
              choices={priorities}
              label={t("ticket.common.priority")}
              validate={required()}
            />
          </div>

          <div className="col-span-12">
            <SelectInput
              defaultValue={1}
              source="assignee"
              choices={assignes}
              validate={required()}
              label={t("ticket.common.assignee")}
              optionValue="id"
            />
          </div>

          <div className="col-span-12">
            <ReferenceInput
              source="reporter.id"
              reference="users"
              label="Reporter ID"
            >
              <TextInput
                source="reporter.name"
                label={t("ticket.common.reporter")}
              />
            </ReferenceInput>
          </div>

          <div className="col-span-12">
            <TextInput
              source="reporter.email"
              label={t("ticket.common.reporterEmail")}
              validate={validateReporterEmail}
            />
          </div>

          <div className="col-span-12">
            <DateInput
              source="createdAt"
              label={t("ticket.common.createdAt")}
            />
          </div>
          <div className="col-span-12">
            <DateInput
              source="updatedAt"
              label={t("ticket.common.updatedAt")}
            />
          </div>

          <div className={`col-span-12 ${mode.type === "light" ? "bg-[#fbfbfb94]" : "bg-[#42424230]"} mb-2 p-4 rounded-[0.8rem]`}>
            <ArrayInput
              source="labels"
              label={t("ticket.common.label")}
            >
              <SimpleFormIterator>
                <TextInput source="" label={t("ticket.common.label")} />
              </SimpleFormIterator>
            </ArrayInput>
          </div>

          <div className="col-span-12">
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
    </EditBase>
  );
};

export default TicketViewEdit;
