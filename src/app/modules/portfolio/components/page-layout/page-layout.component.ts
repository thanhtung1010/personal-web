import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'tt-page-layout',
  templateUrl: './page-layout.component.html'
})
export class PageLayoutComponent implements OnInit {
  @ViewChild('main') main!: ElementRef<HTMLElement>;
  @Input() showFooter: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() haveNoMainContent: boolean = false;

  customClsEmptyMain: string = 'tt-empty_main';
  emptyMainMsg: string = 'MESSAGE.EMPTY';
  emptyMainImg: string = 'being-updated';

  constructor() { }

  ngOnInit() {
  }

}
