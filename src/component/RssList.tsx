import { Datagrid, DeleteButton, EditButton, List, TextField } from "react-admin"


export const RssList = (props: any) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="link"/>
                <TextField source="category"/>
                <EditButton resource="update"/>
                <DeleteButton resource="delete"/>
            </Datagrid>
       </List>
    )
}