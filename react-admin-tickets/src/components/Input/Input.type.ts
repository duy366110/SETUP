import { TextInputProps } from "react-admin";
export interface InputProps extends TextInputProps {
  autoFocus?: boolean;
  disabled?: boolean;
  isRequired?: boolean;
  max?: number;
  message?: string;
  min?: number;
  passwordMax?: number;
  passwordMin?: number;
  readOnly?: boolean;
  telMax?: number;
  telMin?: number;
  type?: "text" | "email" | "password" | "numeric" | "tel";
  value?: any | undefined | null | "";
}
