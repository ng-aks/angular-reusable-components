import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgAksFormsConfigModel } from '../public-api';
import { FormComponent } from "./form/form.component";

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
  @Output() onGetForm:EventEmitter<any> = new EventEmitter<any>();
  @Input() isSubmit:boolean = false;


  getFormGroup(e:any){
    this.onGetForm.emit(e);
  }
}
