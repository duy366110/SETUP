import * as React from "react";
import { Menu, MenuItemLink, useTranslate } from "react-admin";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import RoofingIcon from "@mui/icons-material/Roofing";

interface BreadCrumbsProps {
  paths: Array<any>;
}

export const BreadCrumbs = (props: BreadCrumbsProps) => {
  const t = useTranslate();

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
  }

  return (
    <Menu className="my-4 !w-full" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <MenuItemLink className="!border-l-0 !px-0 !text-xs hover:!bg-transparent !bg-transparent !underline flex gap-2" color="inherit" to="/">
          <RoofingIcon fontSize="small" />
          <span>{t("dashboard.title")}</span>
        </MenuItemLink>

        {props.paths.length > 0 &&
          props.paths.map((path: any) => {
            if (path?.last) {
              return (
                <Typography className="!text-xs uppercase" key={path.name} sx={{ color: "text.primary" }}>
                  {path.name}
                </Typography>
              );
            }

            return (
              <MenuItemLink className="!border-l-0 !px-0 !text-xs hover:!bg-transparent !bg-transparent !underline flex gap-2" key={path.name} color="inherit" to={path.link}>
                {path.name}
              </MenuItemLink>
            );
          })}
      </Breadcrumbs>
    </Menu>
  );
};
