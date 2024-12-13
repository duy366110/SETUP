import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  required,
  useRedirect,
  useTranslate,
  useGetList,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { EmailRegex } from "@/constants/Regexs";

const TicketPageEdit = () => {
  const redirect = useRedirect();
  const t = useTranslate();
  const {data: statuses, isLoading: isLoadingStatus }: any = useGetList<any>("statuses");
  const {data: priorities, isLoading: isLoadingPriority }: any = useGetList<any>("priorities");
  const { data: assignes, isLoading: isLoadingAssignes }: any = useGetList<any>("assignes");

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

  return (
    <Edit redirect="list" title={t("ticket.form.edit")} actions={<></>}>
      <SimpleForm>
        <div className="col-span-12 mb-4">
          <h2 className="flex gap-2 items-center text-lg">
            <ArrowBackIosNewIcon
              fontSize="small"
              className="cursor-pointer"
              onClick={() => redirect("/tickets")}
            />
            <span>{t("ticket.form.edit")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <TextInput
              source="title"
              label={t("ticket.common.title")}
              validate={required()}
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <SelectInput
              source="status"
              choices={statuses}
              label={t("ticket.common.status")}
              validate={required()}
              optionValue="id"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <SelectInput
              source="priority"
              choices={priorities}
              label={t("ticket.common.priority")}
              validate={required()}
              optionValue="id"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <SelectInput
              defaultValue={1}
              source="assignee"
              choices={assignes}
              validate={required()}
              label={t("ticket.common.assignee")}
              optionValue="id"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
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

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <TextInput
              source="reporter.email"
              label={t("ticket.common.reporterEmail")}
              validate={validateReporterEmail}
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <DateInput
              source="createdAt"
              label={t("ticket.common.createdAt")}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <DateInput
              source="updatedAt"
              label={t("ticket.common.updatedAt")}
            />
          </div>

          <div className="col-span-12 lg:col-span-4 bg-[#f5f5f5] p-4 rounded-[0.8rem]">
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
    </Edit>
  );
};

export default TicketPageEdit;
