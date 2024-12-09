import { Edit, SimpleForm, TextInput } from "react-admin";

export const PageEdit = (props: any) => {

    return (
        <Edit>
            <SimpleForm>
                <TextInput source="name" />
            </SimpleForm>
        </Edit>
    )
}