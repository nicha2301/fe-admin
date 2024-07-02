import { Edit, SimpleForm, TextInput } from "react-admin"


export const UserEdit = (props: any) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="username" />
                <TextInput disabled source="pass" />
                <TextInput source="role" />
            </SimpleForm>
        </Edit>
    )
}