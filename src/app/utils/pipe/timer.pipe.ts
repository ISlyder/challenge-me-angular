import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    let formattedSeconds: string;
    let formattedMinutes: string;
    formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
    formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    return `${formattedMinutes}:${formattedSeconds}`;
  }

}
