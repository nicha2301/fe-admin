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
import customDataProvider from './customDataProvider';
import { RssEdit } from './component/RssEdit';
import { ReadEdit } from './component/ReadEdit';
import { ReportEdit } from './component/ReportEdit';
import { RssCreate } from './component/RssCreate';
import { EditButton } from 'react-admin';

const dataProvider = customDataProvider('http://localhost:8080/api');


export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="user" list={UserList} create={UserCreate}/>
    <Resource name="article-read" list={ReadedList}/>
    <Resource name="report" list={ReportList} edit={ReportEdit}/>
    <Resource name="rss" list={RssList} create={RssCreate} edit={RssEdit}/>
  </Admin>
);
