import { ASSETS_TYPE, htmlATagTarget } from "tt-library-angular-porfolio";

export interface ISocialNetwork {
  name: string;
  type: ASSETS_TYPE;
  action: 'copy' | 'url';
  content?: string;
  href?: string;
  target?: htmlATagTarget;
}
