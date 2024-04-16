import { Pipe, PipeTransform } from "@angular/core";
import { AppConfigService } from 'tt-library-angular-porfolio';
import { TranslateService } from "@ngx-translate/core";
import { format } from 'date-fns';
import { union } from "lodash";

@Pipe({
  name: 'TTFromToDate'
})

export class FromToDatePipe implements PipeTransform {
  defaultLetterJoin: string = 'COMMON.TO';
  appConfig = this.appConfigService.appConfig;

  constructor(
    private translateService: TranslateService,
    private appConfigService: AppConfigService,
  ) {}

  transform(values: Array<number | null>, letterJoin?: string, dateFormat?: string, responsive: boolean = false, args?: any[]) {
    if (!values || !values.length) return '';
    const _format = dateFormat ||
      (!responsive ? this.appConfig.settingFormat.dateTime.portfolioDate : this.appConfig.settingFormat.dateTime.portfolioDateResponsive);
    const _newValues = values.map(elm => {
      if (!elm) {
        return 'Now'
      } else {
        const _afterFormat = format(elm, _format);
        return _afterFormat;
      }
    });
    if (!responsive) {
      return _newValues.join(` ${letterJoin || this.translateService.instant(this.defaultLetterJoin)} `);
    } else {
      return union(_newValues).join(` ${letterJoin || this.translateService.instant(this.defaultLetterJoin)} `);
    }
  }
}
