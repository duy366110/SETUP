import { Create, SimpleForm, TextInput } from "react-admin";

export const PageCreate = (props: any) => {

    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    )
}