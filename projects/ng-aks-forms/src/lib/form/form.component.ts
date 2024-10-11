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
      formGroup[control.name] = [control.value || '', controlValidators];
    });
    this.dynamicFormGroup = this.formBuilder.group(formGroup);
    this.addOtherFeatureInForm();
  }
  addOtherFeatureInForm() {
    this.formConfig.map(control => {
      if (control.disabled) {
        this.dynamicFormGroup.get(control.name)?.disable();
      } else {
        this.dynamicFormGroup.get(control.name)?.enable();
      }
    })
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

  getLayoutClassForControlGroup(control: NgAksFormsConfigModel) {
    return { 'row': control.layout == 'horizontal', 'col-12': control.layout == 'vertical' }
  }

  getLayoutClassForHorizontalLabel(control: NgAksFormsConfigModel) {
    return { 'col-4 col-form-label': control.layout == 'horizontal' }
  }

  getLayoutClassForHorizontalControl(control: NgAksFormsConfigModel) {
    return { 'col-8': control.layout == 'horizontal' }
  }

  getLayoutClassForVerticalBlock(control: NgAksFormsConfigModel) {
    return { 'col-12': control.layout == 'vertical' }
  }

  getInputControlClass(control: NgAksFormsConfigModel) {
    return { 'form-control-color': control.type == 'color', 'form-control-plaintext': control.readonly }
  }

  getErrorClass(control: NgAksFormsConfigModel) {
    return { 'col-8 offset-4': control.layout == 'horizontal', 'col-12': control.layout == 'vertical' }
  }

  isError(control: NgAksFormsConfigModel) {
    return this.dynamicFormGroup.controls[control.name]?.invalid && this.dynamicFormGroup.controls[control.name]?.touched
  }
}
