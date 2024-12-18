import { Admin, Resource, CustomRoutes, useTheme, useStore } from "react-admin";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import LayoutCustom from "@/layouts/LayoutCustom";
import dataProviderFactory from "@/providers/servers/index";
import { authProvider } from "@/providers/authProvider";
import I18nProvider from "@/providers/I18nProvider";
import { ThemeName, Themes } from "@/themes/Themes";
import store from "@/store/index";
import Dashboard from "@/containers/dashboard/Dashboard";
import Login from "@/containers/auth/Login";



import { resource as ResourceTicket } from "@/containers/tickets/Index";
import { resource as ResourceIssue } from "@/containers/issues/Index";
import { resource as ResourceSchedule } from "@/containers/schedules/index";

const App = () => {
  const theme: any = useTheme();
  const currentTheme = theme.palette?.mode || "light";

  const [themeName] = useStore<ThemeName>("themeName", "default");
  const lightTheme = Themes.find((theme) => theme.name === themeName)?.light;
  const darkTheme = Themes.find((theme) => theme.name === themeName)?.dark;

  return (
    <Admin
      layout={LayoutCustom}
      dataProvider={dataProviderFactory(
        process.env.REACT_APP_DATA_PROVIDER || "",
      )}
      authProvider={authProvider}
      i18nProvider={I18nProvider}
      disableTelemetry
      loginPage={Login}
      lightTheme={lightTheme}
      darkTheme={darkTheme}
      defaultTheme={currentTheme}
    >
      <CustomRoutes>
        <Route path="/" element={<Dashboard />} />
      </CustomRoutes>

      <Resource name="tickets" {...ResourceTicket} />
      <Resource name="issues" {...ResourceIssue} />
      <Resource name="schedules" {...ResourceSchedule} />
    </Admin>
  );
};

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
