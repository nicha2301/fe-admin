import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin"


export const RssEdit = (props: any) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="link" />
                <TextInput source="category" />
            </SimpleForm>
        </Edit>
    )
}