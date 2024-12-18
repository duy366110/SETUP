import {
  Create,
  SaveButton,
  SimpleForm,
  TextInput,
  SelectInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  required,
  Toolbar,
  useRedirect,
  useTranslate,
  useGetList,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import { EmailRegex } from "@/constants/Regexs";

const TicketPageCreate = () => {
  const redirect = useRedirect();
  const t = useTranslate();

  const mode: any = useSelector<RootState>(
    (state: any) => state.mode,
  );

  const { data: statuses, isLoading: isLoadingStatus }: any =
    useGetList<any>("statuses");
  const { data: priorities, isLoading: isLoadingPriority }: any =
    useGetList<any>("priorities");
  const { data: assignes, isLoading: isLoadingAssignes }: any =
    useGetList<any>("assignes");

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
    <Create redirect="list" title={t("ticket.form.create")}>
      <SimpleForm
        toolbar={
          <Toolbar className="!px-[16px]">
            <div className="flex justify-between w-full">
              <Button
                onClick={() => redirect("/tickets")}
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

          <div className={`col-span-12 lg:col-span-8 ${mode.type === "light" ? "bg-[#fbfbfb94]" : "bg-[#42424230]"} p-4 rounded-[0.8rem]`}>
            <ArrayInput source="labels" label={t("ticket.common.label")}>
              <SimpleFormIterator className="mt-2">
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
