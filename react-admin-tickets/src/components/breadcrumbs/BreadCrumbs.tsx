import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

interface BreadCrumbsProps {
  paths: Array<any>;
}

export const BreadCrumbs = (props: BreadCrumbsProps) => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.log(event);
    console.log(MouseEvent);
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div className="my-4" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>

        {props.paths.length > 0 &&
          props.paths.map((path: any) => {
            return (
              <Link
                key={path.name}
                underline="hover"
                color="inherit"
                href={path.link}
              >
                {path.name}
              </Link>
            );
          })}

        {/* <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography> */}
      </Breadcrumbs>
    </div>
  );
};
