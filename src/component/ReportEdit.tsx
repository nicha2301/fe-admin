import { Edit, SimpleForm, TextInput } from "react-admin"


export const ReportEdit = (props: any) => {
    return (
        <Edit title={"Create a user"} {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="nameArticle" />
                <TextInput source="description" />
            </SimpleForm>
        </Edit>
    )
}