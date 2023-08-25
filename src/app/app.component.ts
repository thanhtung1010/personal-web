import { AfterViewInit, Component } from '@angular/core';
import { AppLoadingHelper } from './helpers/app-loading.helper';

@Component({
  selector: 'tung-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    AppLoadingHelper.Toggle(false);
  }
}
