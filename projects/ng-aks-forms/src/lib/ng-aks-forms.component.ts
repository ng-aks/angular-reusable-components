import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgAksFormsConfigModel } from './core/ng-aks-forms.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng-aks-forms',
  templateUrl: './ng-aks-forms.component.html',
  styleUrls: ['./ng-aks-forms.component.scss']
})
export class NgAksFormsComponent implements OnInit, OnChanges {
  @Input() formConfig: NgAksFormsConfigModel[] = [];
  @Output() onSubmitForm:EventEmitter<any> = new EventEmitter<any>();
  @Output() getForm:EventEmitter<any> = new EventEmitter<any>();
  @Input() IsGetForm:boolean = false;
  dynamicFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initDynamicForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.IsGetForm){
      this.getForm.emit(this.dynamicFormGroup);
    }
  }
  initDynamicForm() {
    this.dynamicFormGroup = this.formBuilder.group({});
    let formGroup: Record<string, any> = {};
    this.formConfig.map(control => {
      let controlValidators: Validators[] = [];
      if (control.validations) {
        control.validations.forEach(validation => {
          switch (validation.validator) {
            case 'required':
              controlValidators.push(Validators.required);
              break;
            case 'pattern':
              controlValidators.push(Validators.pattern(validation.validator));
              break;
            case 'email':
              controlValidators.push(Validators.email);
              break;
            default:
              break;
          }
        });
      }
      formGroup[control.name] = [control.value || '', controlValidators]
    });
    this.dynamicFormGroup = this.formBuilder.group(formGroup);
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicFormGroup.get(control.name);
    if (!formControl) {
      return '';
    }
    for (let validation of control.validations) {
      if (formControl.hasError(validation.name)) {
        return validation.message;
      }
    }
    return '';
  }
  onSubmit(){
    if(this.dynamicFormGroup.valid){
      this.onSubmitForm.emit(this.dynamicFormGroup.value);
    } else {
      this.dynamicFormGroup.markAllAsTouched();
    }
  }
}
