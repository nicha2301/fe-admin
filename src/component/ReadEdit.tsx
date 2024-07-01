import { Edit, SimpleForm, TextInput } from "react-admin"


export const ReadEdit = (props: any) => {
    return (
        <Edit title={"Create a user"} {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="link" />
                <TextInput source="userId" />
                <TextInput source="reportId" />
            </SimpleForm>
        </Edit>
    )
}