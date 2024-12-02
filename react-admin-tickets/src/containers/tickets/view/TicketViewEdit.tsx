import { EditBase, SimpleForm, TextInput } from "react-admin";

interface TicketViewEditProps {
    id?:string;
}

const TicketViewEdit = (props: TicketViewEditProps | any) => {

    return (
        <EditBase className="!border-0" title=" " id={props.id}>
            <SimpleForm className="!border-0">
                <TextInput source="id" />
            </SimpleForm>
        </EditBase>
    )
}

export default TicketViewEdit;