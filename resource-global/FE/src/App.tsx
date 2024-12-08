import {
  Admin,
  Resource
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
// COMPONENT
import { Resource as DashboardResource } from "./containers/Dashboard/Resource";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >

  <Resource name="/" {...DashboardResource} />

  </Admin>
);
