import { Component, OnInit } from '@angular/core';
import { IExperienceItem, IProjectItem, ISkillItem } from '../../interfaces';
import { IAntTableElement } from '@app/interfaces';

@Component({
  selector: 'tt-about-me',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements OnInit {
  skillData: ISkillItem[] = [
    {
      iconName: 'design',
      iconType: 'svg',
      title: 'COMMON.DESIGN',
      description: 'COMMON.DESIGN_DESCTIPTION',
      childs: [
        {
          title: 'COMMON.ENJOY_DESGIN',
          skills: ['Web', 'Apps', 'Logos'],
          showType: 'join',
        },
        {
          title: 'COMMON.DESIGN_TOOLS',
          skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
          showType: 'full',
        },
      ],
    },
    {
      iconName: 'frontend-develop',
      iconType: 'svg',
      title: 'COMMON.MY_POSITION',
      description: 'COMMON.POSITION_DESCRIPTION',
      childs: [
        {
          title: 'COMMON.SOMETHING_I_SPEAK',
          skills: ['HTML', 'css', 'scss', 'JavaScrip', 'TypeScript'],
          showType: 'join',
        },
        {
          title: 'COMMON.DEV_TOOLS',
          skills: ['VS Code', 'Angular', 'Ant Design', 'Git', 'Vercel'],
          showType: 'full',
        },
      ],
    },
    {
      iconName: 'self-study',
      iconType: 'svg',
      title: 'COMMON.SELF_STUDY',
      description: 'COMMON.SELF_STUDY_DESCRIPTION',
      childs: [
        {
          title: 'COMMON.SOMETHING_I_CAN_DO',
          skills: [
            'Firebase',
            'Sentry',
            'NestJS',
            'ReactJS',
            'Web component Angular',
            'Lib with Angular',
          ],
          showType: 'full',
        },
      ],
    },
  ];
  experienceTableHeader: IAntTableElement<string>[] = [
    {
      field: '',
      title: 'EMPTY',
      width: 100,
      align: 'center',
    },
    {
      field: 'time',
      title: 'COMMON.TIME',
      width: 250,
    },
    {
      field: 'jobTitle',
      title: 'COMMON.JOB_TITLE',
      width: 250,
    },
    {
      field: 'companyName',
      title: 'COMMON.COMPANY_NAME',
      width: 400,
    },
  ];
  projectTableHeader: IAntTableElement<string>[] = [
    {
      field: '',
      title: 'EMPTY',
      width: 100,
      align: 'center',
    },
    {
      field: 'projectTitle',
      title: 'COMMON.TITLE',
      width: 750,
    },
    {
      field: 'position',
      title: 'COMMON.POSITION',
      width: 300,
    },
  ];
  experienceData: IExperienceItem[] = [
    {
      id: 'asdhnjahsbjhsdbfhwe',
      fromWorkingTime: 1634490000000,
      toWorkingTime: null,
      wokingTime: {
        year: 2,
        month: 0,
      },
      jobType: 'FULL_TIME',
      jobTitle: 'SOFTWARE_ENGINEER',
      companyName: 'Bstar Solutions',
      updatedAt: 0,
      detail: [],
    }
  ];
  projectData: IProjectItem[] = [
    {
      id: 'asdhnjahsbjhsdbfhwe',
      fromWorkingTime: 1635699600000,
      toWorkingTime: 1622480400000,
      projectName: 'Penguin',
      basicDescription: {
        en: 'OMS and IM.',
        vi: 'OMS and IM.',
      },
      position: 'FRONTEND_DEVELOPER',
      updatedAt: 0,
      detail: [],
    },
    {
      id: 'asdhnjahsbjhsdbfhwe',
      fromWorkingTime: 1622480400000,
      toWorkingTime: null,
      projectName: 'Loyalty',
      basicDescription: {
        en: 'For user earn and manager point when using service.',
        vi: 'For user earn and manager point when using service.',
      },
      position: 'FRONTEND_DEVELOPER',
      updatedAt: 0,
      detail: [],
    },
  ];

  marginQuote: string = '150px';
  marginBottomSkill: string = '100px';

  constructor() {}

  ngOnInit() {}
}
