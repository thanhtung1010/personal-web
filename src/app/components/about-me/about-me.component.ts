import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AppConfigService, AssetsLink, IAntTableElement, LANG_TYPE, LangService, MenuService } from 'tt-library-angular-porfolio';
import { Subject, takeUntil } from 'rxjs';
import { IExperienceItem, IProjectItem, ISkillItem } from '../../interfaces';
import { EXPERIENCES_TABLE_HEADER_FIELD_TYPE, PROJECTS_TABLE_HEADER_FIELD_TYPE } from '../../types';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { FromToDatePipe } from '@app/pipes';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { MenuComponent } from '../menu/menu.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tt-about-me',
  templateUrl: './about-me.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AssetsLink,
    PageLayoutComponent,
    FromToDatePipe,
    NzCollapseModule,
    MenuComponent,
  ]
})

export class AboutMeComponent implements OnInit, OnDestroy, AfterViewInit {
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
  experienceTableHeader: IAntTableElement<EXPERIENCES_TABLE_HEADER_FIELD_TYPE>[] = [
    {
      field: 'time',
      title: 'COMMON.TIME',
      width: '25%',
    },
    {
      field: 'jobTitle',
      title: 'COMMON.JOB_TITLE',
      width: '25%',
    },
    {
      field: 'companyName',
      title: 'COMMON.COMPANY_NAME',
      width: '40%',
    },
    {
      field: '',
      title: 'EMPTY',
      width: '10%',
      align: 'center',
    },
  ];
  projectTableHeader: IAntTableElement<PROJECTS_TABLE_HEADER_FIELD_TYPE>[] = [
    {
      field: 'projectTitle',
      title: 'COMMON.TITLE',
      width: '65%',
    },
    {
      field: 'position',
      title: 'COMMON.POSITION',
      width: '25%',
    },
    {
      field: '',
      title: 'EMPTY',
      width: '10%',
      align: 'center',
    },
  ];
  experienceData: IExperienceItem[] = [
    {
      id: 'asdhnjahsbjhsdbfhwe',
      expand: false,
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
      detail: [
        {
          en: 'Enhance front-end skills, focusing on UI/UX, SEO and optimizing web page performance.',
          vi: 'Enhance front-end skills, focusing on UI/UX, SEO and optimizing web page performance.'
        },
        {
          en: 'Implement or recommend the application of design patterns.',
          vi: 'Implement or recommend the application of design patterns.'
        },
        {
          en: 'Provide training on problem-solving approaches across different domains.',
          vi: 'Provide training on problem-solving approaches across different domains.'
        },
        {
          en: 'Develop soft skills such as teamwork and the ability to clearly and effectively communicate ideas.',
          vi: 'Develop soft skills such as teamwork and the ability to clearly and effectively communicate ideas.'
        },
      ],
    },
  ];
  projectData: IProjectItem[] = [
    {
      id: 'asdhnjahsbjhsdbfhwe',
      expand: false,
      fromWorkingTime: 1635699600000,
      toWorkingTime: 1622480400000,
      projectName: 'Penguin',
      basicDescription: {
        en: 'OMS and IM.',
        vi: 'OMS and IM.',
      },
      position: 'FRONTEND_DEVELOPER',
      updatedAt: 0,
      detail: [
        {
          title: 'COMMON.DESCRIPTION',
          icon: 'description',
          en: 'Web ordering solution to optimize and automate the operational processes in customer care giving Sales Reps, Customer Service and Customers a convenient and efficient way to place, manage and track their orders, inventory, perform	cycle count and approval requests.',
          vi: 'Web ordering solution to optimize and automate the operational processes in customer care giving Sales Reps, Customer Service and Customers a convenient and efficient way to place, manage and track their orders, inventory, perform	cycle count and approval requests.'
        },
        {
          title: 'COMMON.RESPONSIBILITIES',
          icon: 'responsibility',
          en: 'Develop new features, update/enhance features. Fix bugs, optimize ui. Review documents, verify for enhanced quality. Transfer, support new member.',
          vi: 'Develop new features, update/enhance features. Fix bugs, optimize ui. Review documents, verify for enhanced quality. Transfer, support new member.'
        },
        {
          title: 'COMMON.EXPERIENCE',
          icon: 'experience',
          en: 'This is my first project in my professional career, and it has significantly contributed to my understanding of the working processes within a team. It has taught me how to effectively communicate with team members and transfer requirements to new members. Additionally, it has enhanced my programming mindset and improved my skills in time and task management. New knowledge has made coding more efficient and enjoyable for me.',
          vi: 'This is my first project in my professional career, and it has significantly contributed to my understanding of the working processes within a team. It has taught me how to effectively communicate with team members and transfer requirements to new members. Additionally, it has enhanced my programming mindset and improved my skills in time and task management. New knowledge has made coding more efficient and enjoyable for me.'
        },
      ],
    },
    {
      id: 'asdhnjahsbjhsdbfhwe',
      expand: false,
      fromWorkingTime: 1622480400000,
      toWorkingTime: null,
      projectName: 'Loyalty',
      basicDescription: {
        en: 'For user earn and manager point when using service.',
        vi: 'For user earn and manager point when using service.',
      },
      position: 'FRONTEND_DEVELOPER',
      updatedAt: 0,
      detail: [
        {
          title: 'COMMON.DESCRIPTION',
          icon: 'description',
          en: 'Build system (booking, management, authenticate) for users (member, operator) to earn, manager points, voucher when using service of companies in the same group.',
          vi: 'Build system (booking, management, authenticate) for users (member, operator) to earn, manager points, voucher when using service of companies in the same group.'
        },
        {
          title: 'COMMON.RESPONSIBILITIES',
          icon: 'responsibility',
          en: 'Develop frontend, optimize ui, fix bug, build core, library, web component by Angular.',
          vi: 'Develop frontend, optimize ui, fix bug, build core, library, web component by Angular.'
        },
        {
          title: 'COMMON.EXPERIENCE',
          icon: 'experience',
          en: 'Expanding my knowledge about libraries, frameworks. Enhanced my programming mindset to tackle a wide range of cases and customize solutions as needed. Additionally, working face-to-face with client teams has further honed my skills in client interactions.',
          vi: 'Expanding my knowledge about libraries, frameworks. Enhanced my programming mindset to tackle a wide range of cases and customize solutions as needed. Additionally, working face-to-face with client teams has further honed my skills in client interactions.'
        },],
    },
  ];

  marginQuote: string = '150px';
  marginBottomSkill: string = '100px';
  currentLang: LANG_TYPE = 'vi';
  seoTitle: string = 'SEO.TITLE_PORTPOLIO_ABOUT_ME';
  visibleMenu: boolean = false;

  constructor(
    private langService: LangService,
    private menuService: MenuService,
    private title: Title,
    private translateService: TranslateService,
    private appConfig: AppConfigService,
  ) {}

  ngOnInit() {
    this.currentLang = this.langService.lang$.value;

    this.langService.lang$.pipe(takeUntil(this.destroyComponentNotier)).subscribe(resp => {
      this.currentLang = resp;
    });

    this.menuService.toggleVisibleMenu$.pipe(takeUntil(this.destroyComponentNotier)).subscribe(resp => {
      this.visibleMenu = resp;
      if (this.appConfig.appInit) {
        if (resp) {
          this.menuService.scrollBody(false);
        } else {
          const timeout = setTimeout(() => {
            this.menuService.scrollBody(true);
            clearTimeout(timeout);
          }, 500);
        }
      }
    })
  }

  ngAfterViewInit(): void {
    const titleTranslate = this.translateService.instant(this.seoTitle);
    this.title.setTitle(titleTranslate);
  }

  ngOnDestroy(): void {
    this.destroyComponentNotier.next(Date.now());
  }

  onToggleExpand(index: number, type: 'project' | 'experience') {
    if (type === 'project') {
      this.projectData[index].expand = !this.projectData[index].expand;
    } else {
      this.experienceData[index].expand = !this.experienceData[index].expand;
    }
  }
}
