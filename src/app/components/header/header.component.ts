import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HiddenOnSrollDirective } from '@app/directives';
import { AssetsLink, LinkButtonLayoutComponent, LogoComponent, MenuService } from 'tt-library-angular-porfolio';

@Component({
  selector: 'tt-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    HiddenOnSrollDirective,
    CommonModule,
    LinkButtonLayoutComponent,
    LogoComponent,
    AssetsLink,
  ]
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') header!: ElementRef<HTMLHeadingElement>;

  logoSVGIcon: string = "simple-icon";
  hiddenCls: string = 'tt-header-hidden';
  whiteBGCls: string = 'tt-white_bg';

  constructor(
    private router: Router,
    private menuService: MenuService
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
      this.header.nativeElement.className = `${_headerCls} ${this.whiteBGCls}`;
    }
  }

  openMenu() {
    this.menuService.toggleVisibleMenu$.next(true);
  }
}
