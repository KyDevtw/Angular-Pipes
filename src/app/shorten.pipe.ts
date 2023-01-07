import { Pipe, PipeTransform } from "@angular/core";

// name 是 pipe 的呼叫名稱
@Pipe({
  name: 'shorten'
})
// transform 傳入兩個數 第一個是值，第二個是參數
export class ShortenPipe implements PipeTransform{
  transform(value: any, ...limit: any[]) {
    if(value.length > limit) {
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }
}
