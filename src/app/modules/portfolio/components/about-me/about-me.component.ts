import { Component, OnInit } from '@angular/core';
import { ISkillItem } from '../../interfaces';

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
        },
        {
          title: 'COMMON.DESIGN_TOOLS',
          skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
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
        },
        {
          title: 'COMMON.DEV_TOOLS',
          skills: ['VS Code', 'Angular', 'Ant Design', 'Git', 'Vercel'],
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
        },
      ],
    },
  ];

  marginQuote: string = '150px';

  constructor() {}

  ngOnInit() {}
}
