import { Component, input, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgAksFormsConfigModel } from '../public-api';
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'ng-aks-forms',
  imports: [FormComponent],
  template: `
    <lib-form [formConfig]="formConfig()" (onSubmitForm)="getFormGroup($event)"/>
    <ng-content/>
  `,
  styles: ``
})
export class NgAksFormsComponent {
  readonly formConfig = input.required<NgAksFormsConfigModel>();
  onGetForm = output<FormGroup>();

  getFormGroup(e:FormGroup){
    this.onGetForm.emit(e);
  }
}
