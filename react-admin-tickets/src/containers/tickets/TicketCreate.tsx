import {
    Create,
    SimpleForm,
    TextInput,
} from "react-admin";

const TicketCrate = (props: any) => {

    return (
        <Create>
            <SimpleForm>
                <TextInput source="id" />
            </SimpleForm>
        </Create>
    )
}

export default TicketCrate;