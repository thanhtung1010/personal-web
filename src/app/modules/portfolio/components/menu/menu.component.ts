import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '@app/services';

@Component({
  selector: 'tt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterViewInit {
  @ViewChild('menu') menuElement!: ElementRef<HTMLElement>;

  constructor(private menuService: MenuService) { }

  ngAfterViewInit() {
    if (this.menuElement) {
      this.menuService.setMenuElement = this.menuElement.nativeElement;
    }
  }

}
