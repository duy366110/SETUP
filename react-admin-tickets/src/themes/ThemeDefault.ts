import { RaThemeOptions } from "./types";
import { deepmerge } from "@mui/utils";

const defaultThemeInvariants = {
  typography: {
    h6: {
      fontWeight: 400,
    },
  },
  sidebar: {
    width: 240,
    closedWidth: 50,
  },
  components: {
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
      },
      variants: [
        {
          props: {},
          style: ({ theme }: any) => ({
            [theme.breakpoints.down("sm")]: { width: "100%" },
          }),
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled" as const,
        margin: "dense" as const,
        size: "small" as const,
        fullWidth: true,
      },
      variants: [
        {
          props: {},
          style: ({ theme }: any) => ({
            [theme.breakpoints.down("sm")]: { width: "100%" },
          }),
        },
      ],
    },
    MuiFormControl: {
      defaultProps: {
        variant: "filled" as const,
        margin: "dense" as const,
        size: "small" as const,
        fullWidth: true,
      },
    },
    RaSimpleFormIterator: {
      defaultProps: {
        fullWidth: true,
      },
    },
    RaTranslatableInputs: {
      defaultProps: {
        fullWidth: true,
      },
    },
  },
};

export const defaultLightTheme: RaThemeOptions = deepmerge(
  defaultThemeInvariants,
  {
    palette: {
      primary: {
        main: "#ee0033",
      },
      background: {
        default: "#fafafb",
      },
      secondary: {
        light: "#6ec6ff",
        main: "#2196f3",
        dark: "#0069c0",
        contrastText: "#fff",
      },
    },
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: "#000", // Màu chữ đỏ cho tất cả MenuItemLink
            "&.MuiMenuItem-root": {
              color: "#171717!important",
              textTransform: "uppercase",
              fontSize: "0.875rem",
              fontWeight: 600,
            },
            "& .Mui-selected": {
              color: "#ee0033", // Màu chữ khi được chọn
              //   backgroundColor: "#faf6f8", // Nền đỏ khi được chọn
            },
            "&.RaMenuItemLink-active": {
              color: "#ee0033!important",
              backgroundColor: "#ee003308",
            },
            "&:hover": {
              color: "#ee0033",
              backgroundColor: "#ffe6e6", // Nền khi hover
            },
            "& .MuiSvgIcon-root": {
              color: "#ee0033", // Chỉ áp dụng cho icon trong MenuItemLink
            },
          },
        },
      },

      MuiCssBaseline: {
        styleOverrides: {
          ".RaLayout-content": {
            paddingLeft: "0px!important", // Set padding-left to 0
          },
        },

        // CONFIG COLOR TAGE A
        a: {
          color: "#ee0033",
          textDecoration: "none",
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            color: "#ee0033", // Màu đỏ cho label trong Datagrid header
            fontWeight: "bold", // (Tùy chọn) làm đậm chữ
            textTransform: "uppercase",
            textAlign: "left",
            // paddingLeft: "0px",
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            "&$disabled": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined", // Đặt mặc định tất cả TextField dạng "outlined"
          fullWidth: true,
        },
      },
    },
  },
);

export const defaultDarkTheme: RaThemeOptions = deepmerge(
  defaultThemeInvariants,
  {
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      background: {
        default: "#313131",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ".RaLayout-content": {
            paddingLeft: "0px!important", // Set padding-left to 0
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            "&$disabled": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined", // Đặt mặc định tất cả TextField dạng "outlined"
          fullWidth: true,
        },
      },
    },
  },
);

export const defaultTheme = defaultLightTheme;
