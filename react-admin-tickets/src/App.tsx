import {
  Admin,
  CustomRoutes,
  useTheme,
  useStore,
} from "react-admin";
import { Route } from "react-router-dom";
import LayoutCustom from "@/layouts/LayoutCustom";
import dataProviderFactory from "@/providers/servers/index";
import { authProvider } from "@/providers/authProvider";

import { ThemeName, Themes } from "@/themes/themes";

import Dashboard from "@/containers/dashboard/Dashboard";

export const App = () => {
  const theme: any = useTheme();
  const currentTheme = theme.palette?.mode || "light";


  const [themeName] = useStore<ThemeName>("themeName", "normal");
  const lightTheme = Themes.find((theme) => theme.name === themeName)?.light;
  const darkTheme = Themes.find((theme) => theme.name === themeName)?.dark;


  return (
    <Admin
      layout={LayoutCustom}
      dataProvider={dataProviderFactory(
        process.env.REACT_APP_DATA_PROVIDER || ""
      )}
      authProvider={authProvider}
      disableTelemetry
      lightTheme={lightTheme}
      darkTheme={darkTheme}
      defaultTheme={currentTheme}
    >
      <CustomRoutes>
        <Route path="/" element={<Dashboard />} />
      </CustomRoutes>
    </Admin>
  );
}
