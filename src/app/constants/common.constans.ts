import { QUERYPARAMS_NAV } from "@app/enums";
import { ILang, INav } from "@app/interfaces";
import { LANG_TYPE } from "@app/types";

export const DEFAULT_LANG: LANG_TYPE = 'vi';
export const LANG_LIST: Array<ILang> = [
  {
    lang: 'vi',
    label: 'LANG.VI'
  },
  {
    lang: 'en',
    label: 'LANG.EN'
  }
];

export const DEFAULT_QUERYPARAMS_NAV: QUERYPARAMS_NAV = QUERYPARAMS_NAV.ABOUT_ME;
export const DEFAULT_NAV: INav = {
  label: "MENU.ABOUT_ME",
  queryParams: QUERYPARAMS_NAV.ABOUT_ME,
  show: true,
};
export const NAVS: Array<INav> = [
  {
    label: "MENU.ABOUT_ME",
    queryParams: QUERYPARAMS_NAV.ABOUT_ME,
    show: true,
  },
  // {
  //   label: "MENU.WORK_EXP",
  //   queryParams: QUERYPARAMS_NAV.WORK_EXP,
  //   show: true,
  // },
  // {
  //   label: "MENU.SKILL",
  //   queryParams: QUERYPARAMS_NAV.SKILL,
  //   show: true,
  // },
  {
    label: "MENU.PERSONAL_PROJECT",
    queryParams: QUERYPARAMS_NAV.PERSONAL_PROJECT,
    show: true,
  },
  // {
  //   label: "MENU.CONTACT_INFOR",
  //   queryParams: QUERYPARAMS_NAV.CONTACT_INFOR,
  //   show: true,
  // },
];
