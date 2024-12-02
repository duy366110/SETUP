import { TitlePortal, useSidebarState, ToggleThemeButton, LocalesMenuButton } from "react-admin";
import { Button } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ListIcon from "@mui/icons-material/List";
import TocIcon from "@mui/icons-material/Toc";
import DivTheme from "../../components/themes/DivTheme";


const Header = (props: any) => {
  const [open, setOpen] = useSidebarState();

  const onToggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <header className="test bg-white h-14 fixed md:relative top-0 left-0  w-[-webkit-fill-available] shadow-md z-[1000]">
      <DivTheme className="fixed bg-white flex items-center h-14 z-50 w-[-webkit-fill-available] px-4">
        <div className="flex items-center justify-between gap-2 w-full grow shrink">
          <div>
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
          </div>

          <div className="flex gap-4">
            <ToggleThemeButton />
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-4">
                <span>hostname:</span>
                <TitlePortal className="!text-[15px]" />
              </p>
              <LocalesMenuButton />
            </div>
          </div>
        </div>
      </DivTheme>
    </header>
  );
};

export default Header;
