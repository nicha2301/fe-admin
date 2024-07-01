import { Datagrid, DeleteButton, EditButton, List, TextField } from "react-admin"


export const ReportList = (props: any) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="nameArticle"/>
                <TextField source="description"/>
                <EditButton resource="update"/>
                <DeleteButton resource="delete"/>
            </Datagrid>
       </List>
    )
}