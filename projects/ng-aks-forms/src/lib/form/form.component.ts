import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgAksFormsConfigModel } from '../core/ng-aks-forms.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-group',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit {
  @Input() formConfig: NgAksFormsConfigModel[] = [];
  @Output() onSubmitForm: EventEmitter<any> = new EventEmitter<any>();
  dynamicFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initDynamicForm();
  }

  ngAfterViewInit(): void {
    this.onSubmitForm.emit(this.dynamicFormGroup);
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
}
