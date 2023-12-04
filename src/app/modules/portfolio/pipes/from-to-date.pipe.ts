import { Pipe, PipeTransform } from "@angular/core";
import { enviroment } from "@environments/environment";
import { TranslateService } from "@ngx-translate/core";
import { format } from 'date-fns';
import { union } from "lodash";

@Pipe({
  name: 'TTFromToDate'
})

export class FromToDatePipe implements PipeTransform {
  defaultLetterJoin: string = 'COMMON.TO';
  constructor(private translateService: TranslateService) {}

  transform(values: Array<number | null>, letterJoin?: string, dateFormat?: string, responsive: boolean = false, args?: any[]) {
    if (!values || !values.length) return '';
    const _format = dateFormat || (!responsive ? enviroment.SETTING_FORMAT.dateTime.portfolioDate : enviroment.SETTING_FORMAT.dateTime.portfolioDateResponsive);
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
