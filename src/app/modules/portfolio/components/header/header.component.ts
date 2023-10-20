import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INav } from '@app/interfaces';
import { MenuService } from '@app/services';

@Component({
  selector: 'tt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  logoSVGIcon: string = "simple-icon";
  currentNav: INav | null = null;

  constructor(
    private menuSer: MenuService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
}
