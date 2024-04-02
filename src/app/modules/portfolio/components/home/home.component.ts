import { Component, OnDestroy, OnInit } from '@angular/core';
import { ROUTE } from 'tt-library-angular-porfolio';
import { MenuService } from '@app/services';
import { Subject, takeUntil } from 'rxjs';
import { IFloatItem, ISummaryAboutMe, ISummaryExp } from '../../interfaces';
import { aboutMeLeftInOut, aboutMeRightInOut } from '../../animations';
import { enviroment } from '@environments/environment';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html',
  animations: [aboutMeLeftInOut, aboutMeRightInOut]
})
export class HomeComponent implements OnInit, OnDestroy {
  destroyComponentNotier: Subject<number> = new Subject();

  floatIcons: IFloatItem[] = [
    {
      name: 'avatar-home',
      type: 'svg',
      top: '50%',
      right: '5%',
      translateX: '0%',
      translateY: '-50%',
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
  downloadCVURL: string = enviroment.GOOGLE_CONFIG.downloadCV;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
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

  showSVGAboutMe(appear: boolean) {
    if (!this.appearAboutMe)
    this.appearAboutMe = appear;
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
