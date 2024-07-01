import { Datagrid, DeleteButton, EditButton, List, TextField } from "react-admin"


export const ReportList = (props: any) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="nameArticle"/>
                <TextField source="description"/>
                <EditButton/>
                <DeleteButton/>
            </Datagrid>
       </List>
    )
}