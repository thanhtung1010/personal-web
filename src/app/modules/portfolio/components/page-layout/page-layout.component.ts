import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'tt-page-layout',
  templateUrl: './page-layout.component.html'
})
export class PageLayoutComponent implements OnInit, AfterContentInit {
  @ViewChild('main') main!: ElementRef<HTMLElement>;
  @Input() showFooter: boolean = true;
  @Input() showHeader: boolean = true;

  haveMainContent: boolean = false;
  customClsEmptyMain: string = 'tt-empty_main';
  emptyMainMsg: string = 'MESSAGE.EMPTY';
  emptyMainImg: string = 'tt-empty_main';

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    const _mainContent = this.main ? this.main.nativeElement.innerHTML : null;
    this.haveMainContent = !!_mainContent;
  }

}
