import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'timePast'
})
export class TimePastPipe implements PipeTransform {
    transform(time: string): string {

        var startDate = new Date(time);

        var endDate = new Date();
        var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

        var day =  Math.floor(seconds / 86400);
        var hour = Math.floor((seconds % 86400) / 3600);
        var min = Math.floor(((seconds % 86400) % 3600)/ 60);
        var sec = Math.floor((seconds % 86400) % 3600)% 60;

        var returnValue = (day != 0 ? `${day} روز، `: '');
        returnValue += (hour != 0 ? `${hour} ساعت، `: '');
        returnValue += `${min} دقیقه قبل`;

        return returnValue;
    }
}  