import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AssetsLink } from '@app/pipes/assets-link.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tt-logo',
  templateUrl: './logo.component.html',
  standalone: true,
  imports: [TranslateModule, CommonModule, AssetsLink],
})
export class LogoComponent implements OnInit {
  @Input() showLogo: boolean = true;
  // @Input() showText: boolean = true;
  @Input() customCls: string = '';

  constructor() { }

  ngOnInit() {
  }

}
