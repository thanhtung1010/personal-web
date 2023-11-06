import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAMTable, IExperienceItem, IProjectItem, ISkillItem } from '../../interfaces';
import { EXPERIENCES_TABLE_HEADER_FIELD_TYPE, PROJECTS_TABLE_HEADER_FIELD_TYPE } from '../../types';
import { LANG_TYPE } from '@app/types';
import { enviroment } from '@environments/environment';
import { LangService } from '@app/services/lang.service';
import { MenuService } from '@global/src/app/services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'tt-about-me',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements OnInit, OnDestroy {
  destroyComponentNotier: Subject<number> = new Subject();
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
  experienceTableHeader: IAMTable<EXPERIENCES_TABLE_HEADER_FIELD_TYPE>[] = [
    {
      field: '',
      title: 'EMPTY',
      width: '10%',
      minWidth: '100px',
      align: 'center',
    },
    {
      field: 'time',
      title: 'COMMON.TIME',
      width: '25%',
      minWidth: '250px',
    },
    {
      field: 'jobTitle',
      title: 'COMMON.JOB_TITLE',
      width: '25%',
      minWidth: '250px',
    },
    {
      field: 'companyName',
      title: 'COMMON.COMPANY_NAME',
      width: '40%',
      minWidth: '400px',
    },
  ];
  projectTableHeader: IAMTable<PROJECTS_TABLE_HEADER_FIELD_TYPE>[] = [
    {
      field: '',
      title: 'EMPTY',
      width: '10%',
      minWidth: '100px',
      align: 'center',
    },
    {
      field: 'projectTitle',
      title: 'COMMON.TITLE',
      width: '65%',
      minWidth: '650px',
    },
    {
      field: 'position',
      title: 'COMMON.POSITION',
      width: '25%',
      minWidth: '250px',
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
    },
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
  currentLang: LANG_TYPE = 'vi';
  visibleMenu: boolean = false;

  constructor(
    private langService: LangService,
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    this.currentLang = this.langService.lang$.value;
    this.langService.lang$.subscribe(resp => {
      this.currentLang = resp;
    });
    this.menuService.toggleVisibleMenu$.pipe(takeUntil(this.destroyComponentNotier)).subscribe(resp => {
      this.visibleMenu = resp;
      if (resp) {
        this.menuService.scrollBody(false);
      } else {
        const timeout = setTimeout(() => {
          this.menuService.scrollBody(true);
          clearTimeout(timeout);
        }, 500);
      }
    })
  }

  ngOnDestroy(): void {
    this.destroyComponentNotier.next(Date.now());
  }
}
