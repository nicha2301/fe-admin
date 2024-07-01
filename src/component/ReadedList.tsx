import { Datagrid, DeleteButton, EditButton, List, TextField } from "react-admin"


export const ReadedList = (props: any) => {
    return (
        <List {...props}>
        <Datagrid>
            <TextField source="link"/>
            <TextField source="userId"/>
            <TextField source="reportId"/>
        </Datagrid>
   </List>
    )
}