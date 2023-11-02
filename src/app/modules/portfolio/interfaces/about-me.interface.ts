import { ASSETS_TYPE } from "@app/enums";

export interface ISkillItem {
  iconName: string;
  iconType: ASSETS_TYPE;
  title: string;
  description: string;
  childs: {
    title: string;
    skills: string[];
    showType: 'join' | 'full';
  }[];
}

export interface IExperienceItem {
  id: string;
  fromWorkingTime: number;
  toWorkingTime: number | null;
  wokingTime: {
    year: number;
    month: number;
  };
  jobType: string;
  jobTitle: string;
  companyName: string;
  updatedAt: number;
  detail: string[];
}

export interface IProjectItem {
  id: string;
  fromWorkingTime: number;
  toWorkingTime: number | null;
  projectName: string;
  basicDescription: {
    en: string;
    vi: string;
  };
  position: string;
  updatedAt: number;
  detail: string[];
}
