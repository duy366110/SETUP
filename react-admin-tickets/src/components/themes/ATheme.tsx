import { styled, useTheme } from "@mui/material";

export const ATheme = styled("a")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#90caf9" : "#1a73e8",
  textDecoration: "none",
  fontSize: "14px",
  "&:hover": {
    textDecoration: "underline",
  },
}));

// Sử dụng với class Tailwind CSS:
{/* <StyledLink
  className="font-bold hover:text-blue-600"
  href="https://example.com"
>
  Đây là một liên kết.
</StyledLink>; */}
