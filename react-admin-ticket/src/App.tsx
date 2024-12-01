import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "@/layouts/Layout";
import dataProviderFactory from "@/providers/server/index";
// import { dataProvider } from "@/providers/dataProvider";
import { authProvider } from "@/providers/authProvider";

export const App = () => (
  <Admin
  dataProvider={dataProviderFactory(
    process.env.REACT_APP_DATA_PROVIDER || ""
  )}
  // dataProvider={dataProvider}
    layout={Layout}
    authProvider={authProvider}
  >
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
