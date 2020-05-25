import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { UtilityService } from '../services';
@Pipe({ name: 'getError', pure: true })
export class GetErrorPipe implements PipeTransform {
    constructor(private utilityService: UtilityService) { }
    transform( inputTitle: string , control?: AbstractControl, lable ? :string): string {


        let errorMessage: string = "";
        let re = /[{}]/gi;
        if (control.dirty == false)
            return '';

        for (const key in control.errors) {
            errorMessage = this.utilityService.getErrorMessage(key, lable);
            
        }
        errorMessage = errorMessage.replace(re, ""); //+ " \u2022 ";
        return errorMessage;
    }
}