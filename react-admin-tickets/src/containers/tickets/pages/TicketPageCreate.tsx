import {
    Create,
    SimpleForm,
    TextInput,
} from "react-admin";

const TicketPageCrate = (props: any) => {

    return (
        <Create>
            <SimpleForm>
                <TextInput source="id" />
            </SimpleForm>
        </Create>
    )
}

export default TicketPageCrate;