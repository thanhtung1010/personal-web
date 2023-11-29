import { Component, OnInit } from '@angular/core';
import { EmptyComponent } from '../empty/empty.component';
import { AssetsLink } from '../../pipes/assets-link.pipe';
import { LinkButtonLayoutComponent } from '../link-button-layout/link-button-layout.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  standalone: true,
  imports: [
    EmptyComponent,
    AssetsLink,
    LinkButtonLayoutComponent,
    NzButtonModule,
    TranslateModule
  ],
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
