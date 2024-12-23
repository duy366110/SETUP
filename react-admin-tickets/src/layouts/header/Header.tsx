import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
  TitlePortal,
  useSidebarState,
  ToggleThemeButton,
  LocalesMenuButton,
  Logout,
  MenuItemLink,
  useTranslate,
  UserMenu,
} from "react-admin";
import { useAuthProvider, useGetIdentity } from "ra-core";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import DivTheme from "@/components/Themes/DivTheme";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { RootState } from "@/store";

const Header = (props: any) => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const t = useTranslate();
  const [open, setOpen] = useSidebarState();
  const { isPending, identity }: any = useGetIdentity();

  const mediaQuery: any = useSelector<RootState>(
    (state: any) => state.mediaQuery,
  );

  const customTitle = useMemo(() => {
    return ["/"];
  }, []);

  const onToggleSidebar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let pathname: string = location.pathname;
    if (customTitle.includes(pathname)) {
      switch (pathname) {
        case "/":
        default:
          setTitle(t("dashboard.title"));
          break;
      }
    } else {
      setTitle("");
    }
  }, [location]);

  return (
    <header className="test bg-white h-14 fixed md:relative top-0 left-0  w-[-webkit-fill-available] shadow-sm z-[1000]">
      <DivTheme className="fixed bg-white flex items-center h-14 z-50 w-[-webkit-fill-available] shadow-sm px-4">
        <div className="flex items-center justify-between gap-2 w-full grow shrink">
          <div className="flex gap-1">
            <Button
              className="!rounded-full !min-w-fit !p-1"
              onClick={onToggleSidebar}
            >
              {open ? (
                <KeyboardDoubleArrowRightIcon />
              ) : (
                <KeyboardDoubleArrowLeftIcon />
              )}
            </Button>

            {mediaQuery && !mediaQuery.md && (
              <div className="flex items-center !text-sm !font-semibolduppercase tracking-wider">
                <span className={`${title ? "" : "hidden"} ease-linear`}>
                  {title ? title : ""}
                </span>
                <TitlePortal className="!text-sm !font-semibold uppercase tracking-wider" />
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <ToggleThemeButton />
            <div className="flex items-center gap-4">
              <LocalesMenuButton />
              <UserMenu icon={<AccountCircleIcon />}>
                <div className="w-[250px]">
                  {identity && (
                    <div className="border-b px-6 py-2">
                      <p className="text-sm font-semibold mb-1">
                        {identity?.fullName}
                      </p>
                      <p className="text-sm text-slate-400">
                        {identity?.email}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-2 py-2">
                    <MenuItemLink
                      className="!text-sm"
                      to="/profile"
                      primaryText={t("common.editProfile")}
                      leftIcon={<PersonIcon fontSize="small" />}
                      sx={{
                        "& .MuiListItemIcon-root": {
                          marginRight: "10px",
                          minWidth: "fit-content",
                        },
                      }}
                    />
                    <MenuItemLink
                      className="!text-sm"
                      to="/preferences"
                      primaryText={t("common.setting")}
                      leftIcon={<SettingsIcon fontSize="small" />}
                      sx={{
                        "& .MuiListItemIcon-root": {
                          marginRight: "10px",
                          minWidth: "fit-content",
                        },
                      }}
                    />
                  </div>

                  <div className="border-t">
                    <Logout
                      sx={{
                        "& .RaLogout-icon": {
                          marginRight: "10px",
                          minWidth: "fit-content",
                        },
                        "& .MuiTypography-root": {
                          fontSize: " 0.875rem",
                          fontWeight: "600",
                        },
                      }}
                    />
                  </div>
                </div>
              </UserMenu>
            </div>
          </div>
        </div>
      </DivTheme>
    </header>
  );
};

export default Header;
