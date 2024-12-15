import { AfterViewInit, Component } from '@angular/core';
import { FORM_CONFIG } from './core/app.constant';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { ValidationName } from 'projects/ng-aks-forms/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';
  formConfig = FORM_CONFIG;
  formGroup!: FormGroup;
  formData!:(Object);

  onGetForm(e: any) {
    this.formGroup = e;
  }
  onSubmitForm() {
    this.formGroup.controls['age'].addValidators([this.ageRangeValidator]);
    this.formGroup.controls['age'].updateValueAndValidity();
    console.log("this.formGroup>> ", this.formGroup)
    if (this.formGroup.valid) {
      console.log("form value", this.formGroup.value);
      this.formData = {...this.formGroup.value};
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
      return { 'ageRange': true };
    }
    return null;
  }
}
