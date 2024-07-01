import { Create, SimpleForm, TextField, TextInput } from "react-admin"

export const RssCreate = (props: any) => {
    return (
        <Create title={"Create a user"} {...props}>
            <SimpleForm>
                <TextInput source="link" />
                <TextInput source="category" />
            </SimpleForm>
        </Create>
    )
}