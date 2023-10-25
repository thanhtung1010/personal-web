import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tt-page-layout',
  templateUrl: './page-layout.component.html'
})
export class PageLayoutComponent implements OnInit {
  @Input() showFooter: boolean = true;
  @Input() showHeader: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
