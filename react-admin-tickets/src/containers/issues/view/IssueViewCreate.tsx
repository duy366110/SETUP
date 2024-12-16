import { Edit, SimpleForm, TextInput } from "react-admin";
const IssueViewCreate = (props: any) => {

    const onCreateHandler = (data: any) => {
        console.log(data);
    }

  return (
    <SimpleForm onSubmit={onCreateHandler} className="grid-col-12 w-full !px-0">
      <div className="col-span-12 w-full">
        <TextInput source="title" label="Title" />
      </div>
    </SimpleForm>
  );
};

export default IssueViewCreate;
