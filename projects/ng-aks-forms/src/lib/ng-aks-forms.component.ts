import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgAksFormsConfigModel } from '../public-api';
import { FormComponent } from "./form/form.component";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ng-aks-forms',
  standalone: true,
  imports: [FormComponent],
  template: `
    <lib-form [formConfig]="formConfig" (onSubmitForm)="getFormGroup($event)"/>
    <ng-content/>
  `,
  styles: ``
})
export class NgAksFormsComponent {
  @Input() formConfig!: NgAksFormsConfigModel;
  @Output() onGetForm:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Input() isSubmit:boolean = false;


  getFormGroup(e:FormGroup){
    this.onGetForm.emit(e);
  }
}
