import { LANG_TYPE } from "@app/types";

export interface IAppConfig {
  production: boolean;
  defaultLang: string;
  cookieStorageLangKey: string;
  ASSETS_URL: string;
  email: string;
  phoneNumber: string;
}

export interface INav {
  label: string;
  show: boolean;
}

export interface ILang {label: string, lang: LANG_TYPE}

export interface IContact {
  svgId: string;
  content: string;
  link?: boolean;
  customClass: Record<string, string>;
}
