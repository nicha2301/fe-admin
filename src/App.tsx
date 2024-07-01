import restProvider from 'ra-data-simple-rest';
import {
  Admin,
  Resource
} from "react-admin";
import { ReadedList } from "./component/ReadedList";
import { ReportList } from "./component/ReportList";
import { RssList } from "./component/RssList";
import { UserCreate } from "./component/UserCreate";
import { UserEdit } from "./component/UserEdit";
import { UserList } from "./component/UserList";
import { Layout } from "./Layout";
import { authProvider } from './auth/authProvider';

const dataProvider = restProvider('http://localhost:8080/api');


export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="user/all" list={UserList} create={UserCreate} edit={UserEdit}/>
    <Resource name="article-read/all" list={ReadedList} create={UserCreate} edit={UserEdit}/>
    <Resource name="report/all" list={ReportList} create={UserCreate} edit={UserEdit}/>
    <Resource name="rss/all" list={RssList} create={UserCreate} edit={UserEdit}/>
  </Admin>
);
