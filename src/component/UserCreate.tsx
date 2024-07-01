import { Create, SimpleForm, TextField, TextInput } from "react-admin"

export const UserCreate = (props: any) => {
    return (
        <Create title={"Create a user"} {...props}>
            <SimpleForm>
                <TextInput source="username" />
                <TextInput source="pass" />
                <TextInput source="role" />
            </SimpleForm>
        </Create>
    )
}