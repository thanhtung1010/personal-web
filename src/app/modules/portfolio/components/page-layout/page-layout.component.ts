import { Component, Input, OnInit } from '@angular/core';
import { IPageLayoutOption } from '../../interface';

@Component({
  selector: 'tt-page-layout',
  templateUrl: './page-layout.component.html'
})
export class PageLayoutComponent implements OnInit {
  @Input() option: IPageLayoutOption = {
    showFooter: true,
    showHeader: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
