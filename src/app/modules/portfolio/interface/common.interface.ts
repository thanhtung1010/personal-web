import { ASSETS_TYPE, htmlATagTarget } from "@app/enums";

export interface ISocialNetwork {
  name: string;
  type: ASSETS_TYPE;
  action: 'copy' | 'url';
  content?: string;
  href?: string;
  target?: htmlATagTarget;
}

export interface IFloatItem {
  name: string;
  type: ASSETS_TYPE;
  translateX: string;
  translateY: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
}
