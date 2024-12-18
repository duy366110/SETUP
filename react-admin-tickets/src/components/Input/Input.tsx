import React, { useMemo, useState } from "react";
import {
  TextInput,
  required,
  email,
  regex,
  minLength,
  maxLength,
  useTranslate,
} from "react-admin";
import { InputProps } from "./Input.type";
import { EInputStyleType } from "./Input.emuns";
import { InputAdornment } from "@mui/material";
import ReportIcon from '@mui/icons-material/Report';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Input: React.FC<InputProps> = ({
  autoFocus = false,
  className = "",
  defaultValue = "",
  disabled = false,
  endIcon = false,
  icon = null,
  isRequired = false,
  label,
  format,
  helperText,
  message = "",
  min = 0,
  max = 64,
  onBlur,
  onChange,
  parse,
  passwordMax = 8,
  passwordMin = 6,
  readOnly = false,
  resource,
  source,
  startIcon = false,
  telMax = 15,
  telMin = 10,
  type = "text",
  validate,
  value = null,
  ...rest
}) => {
  const t = useTranslate();
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
  const regexTel = useMemo(() => {
    return new RegExp(`^[0-9]{${telMin},${telMax}}$`);
  }, [telMin, telMax]);

  const regexPassword = useMemo(() => {
    return new RegExp(
      `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{${passwordMin},${passwordMax}}$`,
    );
  }, [passwordMin, passwordMax]);

  const endIconElm = useMemo(() => {
    let iconEnd = icon? icon : <ReportIcon />;
    if(type === EInputStyleType.PASSWORD.toLowerCase()) {
      iconEnd = icon? icon : isVisiblePassword? <VisibilityIcon onClick={toggleVisiblePassword} /> : <VisibilityOffIcon onClick={toggleVisiblePassword} />
    }

    return (iconEnd);
  }, [endIcon, isVisiblePassword])

  const defaultValidate = useMemo(() => {
    if (validate) return validate;
    if (isRequired) {
      const baseValidation: any = [message ? required(message) : required()];

      if (min >= 0) {
        baseValidation.push(minLength(min, t("common.input.message.min", min)));
      }
      if (0 <= max) {
        baseValidation.push(maxLength(max, t("common.input.message.max", max)));
      }

      const typeValidations: Record<string, any[]> = {
        email: [email(t("common.input.message.email"))],
        tel: [
          regex(regexTel, t("common.input.message.phone", { telMin, telMax })),
        ],
        password: [
          regex(
            regexPassword,
            t("common.input.message.password", {
              passMin: passwordMin,
              passMax: passwordMax,
            }),
          ),
        ],
        numeric: [regex(/^\d+(\.\d+)*$/, t("common.input.message.numeric"))],
      };

      return [...baseValidation, ...(typeValidations[type] || [])];
    }
    return undefined;
  }, [type, validate]);

  const formatNumeric = (value: any) => {
    if (type === EInputStyleType.NUMERIC.toLowerCase() && value) {
      const numValue = value.toString().replace(/\D/g, "");
      if (numValue.length >= 4) {
        return numValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
      return numValue;
    }
    return value ?? "";
  };

  function toggleVisiblePassword() {
    setIsVisiblePassword(!isVisiblePassword);
  }

  return (
    <TextInput
      autoFocus={autoFocus}
      className={className}
      defaultValue={defaultValue || ""}
      disabled={disabled}
      format={type === EInputStyleType.NUMERIC.toLowerCase() && !format ? formatNumeric : format}
      helperText={helperText}
      label={label}
      onBlur={onBlur}
      onChange={onChange}
      parse={parse}
      readOnly={readOnly}
      resource={resource}
      source={source}
      type={(type === EInputStyleType.PASSWORD.toLowerCase() && isVisiblePassword)? EInputStyleType.TEXT.toLowerCase() : type}
      validate={defaultValidate}
      {...rest}
      InputProps={{
        startAdornment:
          startIcon || (icon && endIcon === false) ? (
            <InputAdornment position="start">{icon? icon : <ReportIcon />}</InputAdornment>
          ) : null,
        endAdornment: endIcon || type === EInputStyleType.PASSWORD.toLowerCase() ? (
          <InputAdornment position="end">{endIconElm}</InputAdornment>
        ) : null,
      }}
    />
  );
};
