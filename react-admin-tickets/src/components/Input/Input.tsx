import React, { useMemo } from "react";
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

export const Input: React.FC<InputProps> = ({
  autoFocus = false,
  className = "",
  defaultValue = "",
  disabled = false,
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
  telMax = 15,
  telMin = 10,
  type = "text",
  validate,
  value = null,
  ...rest
}) => {
  const t = useTranslate();
  const regexTel = useMemo(() => {
    return new RegExp(`/^[0-9]{${telMin},${telMax}}$/`);
  }, [telMin, telMax]);

  const regexPassword = useMemo(() => {
    return new RegExp(
      `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{${passwordMin}, ${passwordMax}}$/`,
    );
  }, [passwordMin, passwordMax]);

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
    if (type === "numeric" && value) {
      const numValue = value.toString().replace(/\D/g, "");
      if (numValue.length >= 4) {
        return numValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
      return numValue;
    }
    return value ?? "";
  };

  return (
    <TextInput
      autoFocus={autoFocus}
      className={className}
      defaultValue={defaultValue || ""}
      disabled={disabled}
      format={type === "numeric" && !format ? formatNumeric : format}
      helperText={helperText}
      label={label}
      onBlur={onBlur}
      onChange={onChange}
      parse={parse}
      readOnly={readOnly}
      resource={resource}
      source={source}
      type={type}
      validate={defaultValidate}
      {...rest}
    />
  );
};
