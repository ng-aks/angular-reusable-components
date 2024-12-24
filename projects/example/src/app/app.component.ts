import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FORM_CONFIG } from './core/app.constant';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NgAksFormsComponent } from "../../../ng-aks-forms/src/lib/ng-aks-forms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgAksFormsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example';
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
