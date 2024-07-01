import { Edit, SimpleForm, TextInput } from "react-admin"


export const UserEdit = (props: any) => {
    return (
        <Edit title={"Create a user"} {...props}>
            <SimpleForm>
                <TextInput source="username" />
                <TextInput source="pass" />
                <TextInput source="role" />
            </SimpleForm>
        </Edit>
    )
}