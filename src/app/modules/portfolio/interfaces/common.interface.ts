import { ASSETS_TYPE, htmlATagTarget } from "@app/enums";

export interface ISocialNetwork {
  name: string;
  type: ASSETS_TYPE;
  action: 'copy' | 'url';
  content?: string;
  href?: string;
  target?: htmlATagTarget;
}

export interface ISkillItem {
  iconName: string;
  iconType: ASSETS_TYPE;
  title: string;
  description: string;
  childs: {title: string, skills: string[]}[];
}
