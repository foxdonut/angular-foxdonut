import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string, format?: string): string {
    if (format === 'dashes') {
      return value.substring(0, 3) + '-' + value.substring(3, 6) + '-' + value.substring(6);
    }
    return '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6);
  }

}
