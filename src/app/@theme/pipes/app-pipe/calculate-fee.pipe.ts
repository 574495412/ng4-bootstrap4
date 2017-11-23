import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateFee'
})
export class CalculateFeePipe implements PipeTransform {

  transform(value: number): any {
    return Math.floor((value * 100 * 0.045 + 50))/100;
  }

}
