import { List, Datagrid, TextField } from "react-admin";

export const PageList = (props: any) => {

    return (
        <List resource="posts">
            <Datagrid>
                <TextField source="name" label="Name" />
            </Datagrid>
        </List>
    )
}