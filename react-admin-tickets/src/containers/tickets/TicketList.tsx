import { List, Datagrid, TextField } from "react-admin";

const TicketList = (props: any) => {

    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="id" />
                <TextField source="id" />
                <TextField source="id" />
                <TextField source="id" />
                <TextField source="id" />
                <TextField source="id" />
                <TextField source="id" />
            </Datagrid>
        </List>
    )
}

export default TicketList;