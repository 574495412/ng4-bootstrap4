import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'displayDate'})
export class DisplayDate implements PipeTransform {
    transform(value: string): string {
      var regExp = /^\d{4}\-\d{2}\-\d{2}.*$/g;
      if (!regExp.test(value)){
          return "Date Error";
      }
      return value.replace(/T.*$/g, "");
    }
}