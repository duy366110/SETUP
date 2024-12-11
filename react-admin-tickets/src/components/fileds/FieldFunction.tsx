import { FunctionField, DateField, TextField } from "react-admin";
import { Typography } from "@mui/material";

interface FieldFunctionProps {
  customContent?: (record: any) => any;
  label?: string;
  field: string;
  source: string;
  types?: string;
  width?: string;
  render?: (record?: any, field?: any, width?: string) => any;
}

export const FieldFunction = (props: FieldFunctionProps | any) => {
  return (
    <FunctionField
      label={props.label}
      render={(record: any) => props.render({ record, ...props })}
    />
  );
};

export const RenderFieldFunction = (props: any) => {
  return (
    <>
      {props.types === "custom" && (
        <>
          {props.customContent(props.record)}
        </>
      )}
      {/* {props.types === "date" && <DateField source={props.field} />}
      {props.types === "text" && <TextField source={props.field} />}
      {props.types === "typography" && (
        <Typography className={props.customStyles}>
          {props.record[props.field]}
        </Typography>
      )} */}
    </>
  );
};
