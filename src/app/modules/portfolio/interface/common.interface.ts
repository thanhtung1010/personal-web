import { ASSETS_TYPE, htmlATagTarget } from "@app/enums";

export interface ISocialNetwork {
  name: string;
  type: ASSETS_TYPE;
  action: 'copy' | 'url';
  href?: string;
  target?: htmlATagTarget;
}
