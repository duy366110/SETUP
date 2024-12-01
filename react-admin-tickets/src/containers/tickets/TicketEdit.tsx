import { Edit, EditBase, SimpleForm, TextInput } from "react-admin";

interface TicketEditProps {
    id?:string;
}

const TicketEdit = (props: TicketEditProps | any) => {

    return (
        <EditBase className="!border-0" title=" " id={props.id}>
            <SimpleForm className="!border-0">
                <TextInput source="id" />
            </SimpleForm>
        </EditBase>
    )
}

export default TicketEdit;