import { Datagrid, DeleteButton, EditButton, List, TextField } from "react-admin"


export const RssList = (props: any) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="link"/>
                <TextField source="name"/>
                <EditButton />
                <DeleteButton />
            </Datagrid>
       </List>
    )
}