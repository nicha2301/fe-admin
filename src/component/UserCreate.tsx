import { Create, SimpleForm, TextField, TextInput } from "react-admin"

export const UserCreate = (props: any) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="username" />
                <TextInput source="pass" />
                <TextInput source="role" />
            </SimpleForm>
        </Create>
    )
}