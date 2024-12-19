import {
  Edit,
  SimpleForm,
  SelectInput,
  required,
  SaveButton,
  Toolbar,
  useTranslate,
  useGetList,
  useUpdate,
} from "react-admin";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { RootDispatch } from "@/store";
import { toggleDialog } from "@/store/slice/sliceDialog";

const IssueViewConfirmEdit = (props: any) => {
  const { data: assignes } = useGetList<any>("assignes");
  const dispatch = useDispatch<RootDispatch>();
  const [update] = useUpdate();
  const t = useTranslate();

  const onSubmitHandler = async (data: any) => {
    console.log(data);
    console.log(props.issue);

    let payload = {
      ...props.issue,
      assigne: data.assigne,
    };

    try {
      await update(
        "issues-datas",
        { id: data.id, data: payload },
        {
          onSuccess: () => {
            //   setUpWorkspaces();
            dispatch(toggleDialog());
          },
        },
      );
    } catch (e) {
      console.log("Error while saving data.");
    }
  };

  return (
    <Edit className="lg:w-[350px]" id={props.issue.id}>
      <SimpleForm
        onSubmit={onSubmitHandler}
        toolbar={
          <Toolbar className="!px-[16px]">
            <div className="flex justify-between w-full">
              <Button variant="contained" color="error">
                {t("ra.action.cancel")}
              </Button>
              <div className="flex gap-4 items-center">
                <SaveButton />
              </div>
            </div>
          </Toolbar>
        }
      >
        <div className="w-full">
          <SelectInput
            defaultValue={1}
            source="assigne"
            choices={assignes}
            validate={required()}
            label={t("issue.form.priority")}
            optionValue="id"
          />
        </div>
      </SimpleForm>
    </Edit>
  );
};

export default IssueViewConfirmEdit;
