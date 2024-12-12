import {
  Create,
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

const TicketPageCreate = () => {
  const redirect = useRedirect();
  const t = useTranslate();

  const {data: statuses, isLoading: isLoadingStatus }: any = useGetList<any>("statuses");
  const {data: priorities, isLoading: isLoadingPriority }: any = useGetList<any>("priorities");

  const validateAssigneeEmail = (value: any, allValues: any) => {
    if (allValues.assignee.name) {
      if(!value) {
        return required()(value, allValues);
      }

      if (!EmailRegex.test(value)) {
        return t("common.message.error.email");
      }
    }
    return undefined;
  };

  const validateReporterEmail = (value: any, allValues: any) => {
    if (allValues.reporter.name) {
      if(!value) {
        return required()(value, allValues);
      }

      if (!EmailRegex.test(value)) {
        return t("common.message.error.email");
      }
    }
    return undefined;
  };

  return (
    <Create className="mt-16 md:mt-0" redirect="list" title={t("ticket.form.create")}>
      <SimpleForm>
        <div className="col-span-12 mb-4">
          <h2 className="flex gap-2 items-center text-lg">
            <ArrowBackIosNewIcon
              fontSize="small"
              className="cursor-pointer"
              onClick={() => redirect("/tickets")}
            />
            <span>{t("ticket.form.create")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <TextInput
              autoFocus={true}
              source="title"
              label={t("ticket.common.title")}
              validate={required()}
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <SelectInput
              defaultValue={1}
              source="status"
              choices={statuses}
              label={t("ticket.common.status")}
              validate={required()}
              optionValue="id"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <SelectInput
              defaultValue={1}
              source="priority"
              choices={priorities}
              validate={required()}
              label={t("ticket.common.priority")}
              optionValue="id"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <ReferenceInput
              source="assignee.id"
              reference="users"
              label={t("ticket.common.assignee")}
            >
              <TextInput
                source="assignee.name"
                label={t("ticket.common.assignee")}
              />
            </ReferenceInput>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <TextInput
              source="assignee.email"
              label={t("ticket.common.assigneeEmail")}
              validate={validateAssigneeEmail}
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
    </Create>
  );
};

export default TicketPageCreate;
