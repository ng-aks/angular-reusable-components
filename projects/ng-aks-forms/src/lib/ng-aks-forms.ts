import { Component, input, output } from '@angular/core';
import { NgAksFormsConfigModel } from './core/ng-aks-forms.model';
import { FormGroup } from '@angular/forms';
import { Form } from "./form/form";

@Component({
  selector: 'ng-aks-forms',
  imports: [Form],
  template: `
    <lib-form [formConfig]="formConfig()" (onSubmitForm)="getFormGroup($event)"/>
    <ng-content/>
  `,
  styles: ``
})
export class NgAksForms {
  readonly formConfig = input.required<NgAksFormsConfigModel>();
  onGetForm = output<FormGroup>();

  getFormGroup(e:FormGroup){
    this.onGetForm.emit(e);
  }
}
