import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AppConfigService, AssetsLink, LinkButtonLayoutComponent, MenuService, ROUTE } from 'tt-library-angular-porfolio';
import { Subject, takeUntil } from 'rxjs';
import { IFloatItem, ISummaryAboutMe, ISummaryExp } from '../../interfaces';
import { aboutMeLeftInOut, aboutMeRightInOut, floatInFromBottom } from '../../animations';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MenuComponent } from '../menu/menu.component';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { AppearOnViewDirective } from '@app/directives';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html',
  animations: [
    aboutMeLeftInOut,
    aboutMeRightInOut,
    floatInFromBottom,
  ],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AssetsLink,
    MenuComponent,
    PageLayoutComponent,
    LinkButtonLayoutComponent,
    AppearOnViewDirective,
  ]
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  destroyComponentNotier: Subject<number> = new Subject();

  floatIcons: IFloatItem[] = [
    {
      name: 'avatar-home',
      type: 'svg',
      top: '50%',
      right: '5%',
      translateX: '0%',
      translateY: '-50%',
      loading: 'eager'
    },
    {
      name: 'mouse',
      type: 'svg',
      top: '25%',
      left: '33%',
      translateX: '-50%',
      translateY: '-50%'
    },
    {
      name: 'tablet-screen',
      type: 'svg',
      top: '25%',
      left: '55%',
      translateX: '0%',
      translateY: '0%',
      timeDuration: '10s'
    },
    {
      name: 'desktop-screen',
      type: 'svg',
      top: '10%',
      right: '3%',
      translateX: '0%',
      translateY: '0%',
      timeDuration: '9s'
    },
    {
      name: 'phone-screen',
      type: 'svg',
      bottom: '5%',
      right: '7%',
      translateX: '0%',
      translateY: '0%',
      timeDuration: '9.3s'
    },
    {
      name: 'headphone',
      type: 'svg',
      top: '8%',
      left: '53%',
      translateX: '0%',
      translateY: '0%',
      timeDuration: '9.7s'
    },
    {
      name: 'book',
      type: 'svg',
      top: '12%',
      left: '15%',
      translateX: '0%',
      translateY: '0%',
      timeDuration: '9.9s'
    },
    {
      name: 'coffee',
      type: 'svg',
      bottom: '19%',
      left: '43%',
      translateX: '0%',
      translateY: '0%',
      timeDuration: '9.6s'
    },
    {
      name: 'code',
      type: 'svg',
      bottom: '7%',
      left: '18%',
      translateX: '0%',
      translateY: '0%',
      timeDuration: '9.4s'
    },
  ];
  summaryExpItems: ISummaryExp[] = [
    {
      iconName: 'companies-worked',
      iconType: 'svg',
      count: 1,
      label: 'COMMON.COMPANIES_WORKED'
    },
    {
      iconName: 'completed-projects',
      iconType: 'svg',
      count: 2,
      label: 'COMMON.COMPLETED_PROJECTS'
    },
    {
      iconName: 'years-experience',
      iconType: 'svg',
      count: 2,
      label: 'COMMON.YEARS_EXPERIENCE'
    },
  ];
  leftAboutMeItems: ISummaryAboutMe[] = [
    {
      name: 'hobbies-travel',
      type: 'svg',
    },
    {
      name: 'hobbies-picture',
      type: 'svg',
    },
    {
      name: 'hobbies-cat',
      type: 'svg',
    },
  ];
  rightAboutMeItems: ISummaryAboutMe[] = [
    {
      name: 'hobbies-note',
      type: 'svg',
    },
    {
      name: 'hobbies-draw',
      type: 'svg',
    },
    {
      name: 'hobbies-music',
      type: 'svg',
    },
  ];

  ROUTE = ROUTE;
  visibleMenu: boolean = false;
  appearAboutMe: boolean = false;
  appearSummaryExp: boolean = false;
  downloadCVURL: string = this.appConfig.appConfig?.googleConfig?.downloadCV || '';
  seoTitle: string = 'SEO.TITLE_PORTPOLIO_HOME';

  constructor(
    private menuService: MenuService,
    private appConfig: AppConfigService,
    private translateService: TranslateService,
    private title: Title,
  ) { }

  ngOnInit() {
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

  showSVGAboutMe(appear: boolean) {
    if (!this.appearAboutMe)
    this.appearAboutMe = appear;
  }

  showSVGSummaryExp(appear: boolean) {
    if (!this.appearSummaryExp)
    this.appearSummaryExp = appear;
  }

  toggleMousePosition() {
    const existIdx = this.floatIcons.findIndex(icon => icon.name === 'mouse');
    if (existIdx > -1) {
      const {x, y} = this.getRandomPosition(existIdx);
      this.floatIcons[existIdx].top = x + '%';
      this.floatIcons[existIdx].left = y + '%';
    }
  }

  getRandomPosition(mouseIdx: number): {x: number, y: number} {
    const randomX = (): number => {
      const x = Math.round(Math.random() * 100);
      if ((x + '%') === this.floatIcons[mouseIdx].top) {
        return randomX();
      } else {
        return x;
      }
    };
    const randomY = (): number => {
      const x = Math.round(Math.random() * 100);
      if ((x + '%') === this.floatIcons[mouseIdx].left) {
        return randomY();
      } else {
        return x;
      }
    };

    return {
      x: randomX(),
      y: randomY(),
    };
  }
}
