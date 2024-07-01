import { Datagrid, DeleteButton, EditButton, List, TextField } from "react-admin";


export const UserList = (props: any) => {
    return (
       <List {...props}>
            <Datagrid>
                <TextField source="username"/>
                <TextField source="pass"/>
                <TextField source="role"/>
                <DeleteButton/>
            </Datagrid>
       </List>
    );
}