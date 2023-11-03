import { Pipe, PipeTransform } from "@angular/core";
import { enviroment } from "@environments/environment";
import { TranslateService } from "@ngx-translate/core";
import { format } from 'date-fns';

@Pipe({
  name: 'TTFromToDate'
})

export class FromToDatePipe implements PipeTransform {
  defaultFormat: string = enviroment.SETTING_FORMAT.dateTime.portfolioDate;
  defaultLetterJoin: string = 'COMMON.TO';
  constructor(private translateService: TranslateService) {}

  transform(values: Array<number | null>, letterJoin?: string, dateFormat?: string, args?: any[]) {
    if (!values || !values.length) return '';
    const _format = dateFormat || this.defaultFormat;
    return values.map(elm => {
      if (!elm) {
        return 'Now'
      } else {
        const _afterFormat = format(elm, _format);
        return _afterFormat;
      }
    }).join(` ${letterJoin || this.translateService.instant(this.defaultLetterJoin)} `);
  }
}
