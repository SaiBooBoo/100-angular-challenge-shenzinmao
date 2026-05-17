import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilerTerm'
})
export class FilerTermPipe implements PipeTransform {

  transform(items: string[], searchTerm: string = ''): string[] {
    return items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
