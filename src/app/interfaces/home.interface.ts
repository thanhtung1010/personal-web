import { ASSETS_TYPE } from "tt-library-angular-porfolio";

export interface IFloatItem {
  name: string;
  type: ASSETS_TYPE;
  translateX: string;
  translateY: string;
  timeDuration?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  loading?: 'lazy' | 'eager';
}

export interface ISummaryExp {
  iconName: string;
  iconType: ASSETS_TYPE;
  count: number;
  label: string;
}

export interface ISummaryAboutMe {
  name: string;
  type: ASSETS_TYPE;
}
