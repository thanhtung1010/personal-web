import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'TTNavLink'
})

export class NavLinkPipe implements PipeTransform {

  transform(view: string, ...args: any[]) {
    try {
      if (!view) return '#';

      return '#?view=' + view;
    } catch (error) {
      console.error("NavLinkPipe not implemented.");
      return '#';
    }
  }
}
