import {
  Title,
  AppBar,
  ToggleThemeButton,
  UserMenu,
  useSidebarState,
  TitlePortal,
} from "react-admin";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const AppBarCustom = (props: any) => {
  const [open, setOpen] = useSidebarState();

  return (
    <div className="mx-4 flex gap-4">
      {/* <TitlePortal />
      <IconButton
        color="inherit"
        edge="start"
        onClick={() => setOpen(!open)}
        style={{ marginRight: "10px" }}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <ToggleThemeButton />
      <UserMenu /> */}
    </div>
  );
};

export default AppBarCustom;

const AppBarCustomDefault = (props: any) => {
  return (
    <AppBar
      className="flex flex-row-reverse"
      {...props}
      userMenu={false}
      toolbar={<></>}
      alwaysOn
    >
      <Button>Toggle</Button>
      <ToggleThemeButton />
      <UserMenu>
        <div>Test developer</div>
      </UserMenu>
    </AppBar>
  );
};
