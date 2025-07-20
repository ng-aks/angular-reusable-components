import { Component, signal } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FORM_CONFIG } from './core/app.constant';
import { NgAksForms } from "../../../ng-aks-forms/src/public-api";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgAksForms, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('example');
  formConfig = FORM_CONFIG;
  formGroup!: FormGroup;
  formData!:(Object);

  onGetForm(e: FormGroup) {
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
