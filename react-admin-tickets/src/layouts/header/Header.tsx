import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
  TitlePortal,
  useSidebarState,
  ToggleThemeButton,
  LocalesMenuButton,
  useTranslate,
  UserMenu,
} from "react-admin";
import { Button } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DivTheme from "../../components/themes/DivTheme";

const Header = (props: any) => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const translate = useTranslate();
  const [open, setOpen] = useSidebarState();

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
          setTitle(translate("dashboard.title"));
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
          <div className="flex gap-2">
            <Button
              className="!rounded-full !min-w-fit"
              onClick={onToggleSidebar}
            >
              {open ? (
                <KeyboardDoubleArrowRightIcon />
              ) : (
                <KeyboardDoubleArrowLeftIcon />
              )}
            </Button>

            <div className="flex items-center !text-sm !text-zinc-500 uppercase tracking-wider">
              <span className={`${title ? "" : "hidden"} ease-linear`}>
                {title ? title : ""}
              </span>
              <TitlePortal className="!text-sm text-zinc-500 uppercase tracking-wider" />
            </div>
          </div>

          <div className="flex gap-4">
            <ToggleThemeButton />
            <div className="flex items-center gap-4">
              <LocalesMenuButton />
              <UserMenu />
            </div>
          </div>
        </div>
      </DivTheme>
    </header>
  );
};

export default Header;
