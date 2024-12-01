import { styled } from "@mui/material";

const DivTheme = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#333333" : "#ffffff",
  color: theme.palette.mode === "dark" ? "#fff" : "#000",
  padding: "16px",
}));


export default DivTheme;