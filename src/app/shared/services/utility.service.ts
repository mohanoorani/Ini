import { Injectable } from '@angular/core';



@Injectable()
export class UtilityService {
    constructor() {
    }

    
    public Format(srcString: string, ...args: string[]) {

        return srcString.replace(/{(\d+)}/g,
            (match, number) => (typeof args[number] != 'undefined'
                ? args[number]
                : match));

        ;
    }

    

    public NormalaizeDateString(date: string): string {
        if (date == null) return "";
        date = date.replace(/۰/g, "0");
        date = date.replace(/۰/g, "0");
        date = date.replace(/۱/g, "1");
        date = date.replace(/۱/g, "1");
        date = date.replace(/۲/g, "2");
        date = date.replace(/۳/g, "3");
        date = date.replace(/۴/g, "4");
        date = date.replace(/۵/g, "5");
        date = date.replace(/۶/g, "6");
        date = date.replace(/۷/g, "7");
        date = date.replace(/۸/g, "8");
        date = date.replace(/۹/g, "9");
        return date;
    }

    public validateNationalCode(nationalCode: string): boolean {
        let isValid = true;

        if (nationalCode == null || nationalCode === "")
            isValid = false;
        else if (nationalCode.length !== 10)
            isValid = false;
        else {
            const nationalCodeRgx = new RegExp('^\\d{10}$', 'g');
            const nationalCodeRgx2 = new RegExp('^(?!(\\d)\\1{9})\\d{10}$', 'g');

            if (!nationalCodeRgx.test(nationalCode))
                isValid = false;
            else if (!nationalCodeRgx2.test(nationalCode))
                isValid = false;
            else {
                let check = +nationalCode.substring(9, 10);
                let sum = 0;
                for (var i = 0; i < 9; i++) {
                    sum += +nationalCode.substring(i, i + 1) * (10 - i);
                }
                let remain = sum % 11;
                if (check !== (remain < 2 ? remain : 11 - remain))
                    isValid = false;
            }
        }

        return isValid;
    }

    toDateString(value: number | string): string {
        if (value == null) return '';
        let newValue = value.toString();
        if (newValue.length < 8) return newValue;
        const dateString = newValue = newValue.substring(0, 4) + '/' + newValue.substring(4, 6) + '/' + newValue.substring(6, 8)
        return dateString;
    }

    getErrorMessage(key: string, inputTitle?: string): string {
        let errorMessage = '';
        if (key == 'required')
            errorMessage = `${inputTitle} اجباری است`;
        else if (key == 'invalid-tracking-number')
            errorMessage = `قالب شماره پیگیری صحیح نیست`;
        else if (key == 'email')
            errorMessage = `ایمیل صحیح نیست`;
        else if (key == 'forbiddenName')
            errorMessage = `${inputTitle} غیرمجاز است `;
        else if (key == 'persiancharacter')
            errorMessage = `لطفا فارسي و بیش از یک حرف تايپ کنيد`;
        else if (key == 'persianDate')
            errorMessage = `تاریخ را صحیح وارد کنید`;
        else if (key == 'birthCertificateNumberInvalid')
            errorMessage = `شماره شناسنامه صحیح نیست`;
        else if (key == 'validNationalCode')
            errorMessage = `کد ملي معتبر نيست`;
        else if (key == 'validMobileNumber')
            errorMessage = `شماره همراه معتبر نيست`;
        else if (key == 'validPhoneNumber')
            errorMessage = `شماره ثابت معتبر نيست`;
        else if (key == 'shortPhoneNumber')
            errorMessage = `شماره ثابت معتبر نيست`;
        else if (key == 'shabaNumber')
            errorMessage = `شماره شبا معتبر نیست`;
        else if (key == 'accountNumberLengthVal')
            errorMessage = `شماره حساب باید فقط عدد باشد`;
        else if (key == 'countcharacter')
            errorMessage = ` تعداد کاراکتر ${inputTitle}  صحيح نيست `;
        else
            return key;
        return errorMessage;
    }
}
