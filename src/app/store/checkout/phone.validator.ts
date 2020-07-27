import { FormControl, ValidationErrors } from '@angular/forms';
export function phoneValid(control: FormControl): ValidationErrors | null {
    const currentValue = control.value;
    const validValue = /^(\(\d{3}\))\s(\d{3})(-\d{2}){2}$/g;
    if (!currentValue.match(validValue)) {
        return { invalidPhone: 'Wrong phone! You must enter: (000) 000-00-00'}
    } else {
        return null;
    }
}