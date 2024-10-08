import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgAksFormsConfigModel } from './core/ng-aks-forms.model';

@Component({
  selector: 'ng-aks-forms',
  templateUrl: './ng-aks-forms.component.html',
  styleUrls: ['./ng-aks-forms.component.scss']
})
export class NgAksFormsComponent {
  @Input() formConfig: NgAksFormsConfigModel[] = [];
  @Output() onSubmitForm:EventEmitter<any> = new EventEmitter<any>();
  @Input() isSubmit:boolean = false;

  getFormGroup(e:any){
    this.onSubmitForm.emit(e);
  }
}
