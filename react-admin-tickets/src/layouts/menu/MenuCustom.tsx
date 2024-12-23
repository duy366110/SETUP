import { useState } from "react";
import { Menu, MenuItemLink, useSidebarState, useTranslate } from "react-admin";
// import { Collapse, ListItem, ListItemIcon } from "@mui/material";
import { useLocation } from "react-router-dom";
// import {
//   Settings,
//   ExpandMore,
// } from "@mui/icons-material";
// import DescriptionIcon from "@mui/icons-material/Description";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import HistoryIcon from "@mui/icons-material/History";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
// import styles from "./MenuCustom.module.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const MenuCustom = (props: any) => {
  const [open, setOpen] = useSidebarState();
  const translate = useTranslate();
  const [openCollapse, setOpenCollapse] = useState<{ [key: string]: boolean }>(
    {},
  );

  const location = useLocation();

  const toggleSubMenu = (menuName: string) => {
    setOpenCollapse((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  return (
    <Menu className="h-[calc(100vh)] !pt-0" {...props}>
      {/* LOGO */}
      <h1>
        <MenuItemLink
          to="/"
          selected={location.pathname === "/null"}
          className={`!border-l-0 text-[#ffffff] ${open ? "!px-5" : "!px-1"} h-14 w-[-webkit-fill-available] ease-in-out`}
        >
          <span
            className={`${open ? "text-[20px]" : "text-[11px]"} text-white w-full text-center ease-in-out`}
          >
            <img src="/assets/images/logo-header.png" alt="logo" />
          </span>
        </MenuItemLink>
      </h1>

      {/* MENU */}
      {/* GROUP */}
      <div className="border-t-2">
        <Menu className="!py-0">
          <MenuItemLink
            className="!py-2 !text-xs"
            to="/tickets"
            primaryText={translate("ticket.title")}
            selected={location.pathname === "/tickets"}
            leftIcon={<BookmarkAddedIcon />}
          />

          <MenuItemLink
            className="!py-2 !text-xs"
            to="/issues"
            primaryText={translate("issue.title")}
            selected={location.pathname === "/issues"}
            leftIcon={<InsertDriveFileIcon />}
          />

          <MenuItemLink
            className="!py-2 !text-xs"
            to="/schedules"
            primaryText={translate("schedule.title")}
            selected={location.pathname === "/calendars"}
            leftIcon={<CalendarMonthIcon />}
          />

          {/* <MenuItemLink
            className="!py-3"
            to="/query"
            primaryText="Query Log"
            selected={location.pathname === "/query"}
            leftIcon={<DescriptionIcon />}
          /> */}

          {/* <ListItem
            className="!py-2 !w-[-webkit-fill-available] relative"
            onClick={() => toggleSubMenu("history")}
          >
            <ListItemIcon className="!min-w-[40px]">
              <HistoryIcon />
            </ListItemIcon>
            <span className="w-[155px] whitespace-nowrap overflow-hidden text-ellipsis">Long-term data</span>
            {open && (
              <span
                className={`${(styles as any)["icons-right"]} absolute top-1/2 right-[255px]`}
              >
                {openCollapse["history"] ? <ExpandMore /> : <ChevronLeftIcon />}
              </span>
            )}
          </ListItem> */}

          {/* <Collapse in={openCollapse["history"]}>
            <Menu className="!py-0">
              <MenuItemLink
                className="!py-2"
                leftIcon={<AccountCircleIcon />}
                to="/history/profile"
                selected={location.pathname === "/history/profile"}
                primaryText="Profile"
              />
              <MenuItemLink
                className="!py-2"
                leftIcon={<Settings />}
                to="/history/account"
                selected={location.pathname === "/history/account"}
                primaryText="Account"
              />
            </Menu>
          </Collapse> */}
        </Menu>
      </div>
    </Menu>
  );
};

export default MenuCustom;
