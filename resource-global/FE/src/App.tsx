import {
  Admin,
  Resource
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "@/providers/dataProvider";
import { authProvider } from "@/providers/authProvider";
// COMPONENT
import { Dashboard } from "@/containers/Dashboard/Dashboard";
import { resource as ResourcePost } from "@/containers/Products/Status/index";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
  >
    <Resource name="posts" {...ResourcePost} />
  </Admin>
);
