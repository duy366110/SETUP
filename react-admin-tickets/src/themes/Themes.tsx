import {
    RaThemeOptions,
} from "react-admin";

import { NormalDarkTheme, NormalLightTheme } from "./ThemeNormal";
import { defaultDarkTheme, defaultLightTheme } from "./ThemeDefault";

export type ThemeName =
    | 'normal'
    | 'soft'
    | 'default'
    | 'nano'
    | 'radiant'
    | 'house'
    | 'chiptune';

export interface Theme {
    name: ThemeName;
    light: RaThemeOptions;
    dark?: RaThemeOptions;
}

export const Themes: Array<Theme> = [
    {name: 'normal', light: NormalLightTheme, dark: NormalDarkTheme },
    {name: 'default', light: defaultLightTheme, dark: defaultDarkTheme },
]