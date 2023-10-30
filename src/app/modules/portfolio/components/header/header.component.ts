import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { INav } from '@app/interfaces';
import { MenuService } from '@app/services';

@Component({
  selector: 'tt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') header!: ElementRef<HTMLHeadingElement>;
  logoSVGIcon: string = "simple-icon";
  currentNav: INav | null = null;
  hiddenCls: string = 'tt-header-hidden';
  whiteBGCls: string = 'tt-white_bg';

  constructor(
    private menuSer: MenuService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  handleShowHeaderScrollUp(position: number) {
    if (!this.header) return;

    let _headerCls = this.header.nativeElement.className;
    if (position > 0) {
      if (!_headerCls.includes(this.whiteBGCls)) this.header.nativeElement.className = `${_headerCls} ${this.whiteBGCls}`;
    } else {
      this.header.nativeElement.className = _headerCls.replace(this.whiteBGCls, '');
    }
  }

  handleHeaderInit(position: number) {
    if (!this.header) return;

    let _headerCls = this.header.nativeElement.className;
    if (position > 0) {
      this.header.nativeElement.className = `${_headerCls} ${this.hiddenCls}`;
    }
  }
}
