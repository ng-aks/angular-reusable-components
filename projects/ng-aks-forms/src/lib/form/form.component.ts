import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Config, NgAksFormsConfigModel } from '../core/ng-aks-forms.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit, AfterViewInit {
  @Input() formConfig!: NgAksFormsConfigModel;
  @Output() onSubmitForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
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
    this.formConfig.config.map(control => {
      let controlValidators: Validators[] = [];
      if (control.validations) {
        control.validations.forEach(validation => {
          switch (validation.name) {
            case 'required':
              controlValidators.push(Validators.required);
              break;
            case 'pattern':
              controlValidators.push(Validators.pattern(validation.pattern as string));
              break;
            case 'email':
              controlValidators.push(Validators.email);
              break;
            case 'maxlength':
              controlValidators.push(Validators.maxLength(validation.maxLength as number));
              break;
            case 'minlength':
              controlValidators.push(Validators.minLength(validation.minLength as number));
              break;
            case 'max':
              controlValidators.push(Validators.max(validation.max as number));
              break;
            case 'min':
              controlValidators.push(Validators.min(validation.min as number));
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
    this.formConfig.config.map(control => {
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
      if (validation.customValidation) {
        if (formControl.hasError(validation.customValidation?.name)) {
          return validation.customValidation?.message;
        }
      }
      if (validation.name) {
        if (formControl.hasError(validation.name)) {
          return validation.message;
        }
      }
    }
    return '';
  }

  getLayoutClassForControlGroup(control: Config) {
    return { 'row': this.formConfig.layout == 'horizontal', 'col-12': this.formConfig.layout == 'vertical' }
  }

  getLayoutClassForHorizontalLabel() {
    return { 'col-4 col-form-label': this.formConfig.layout == 'horizontal' }
  }

  getLayoutClassForHorizontalControl() {
    return { 'col-8': this.formConfig.layout == 'horizontal' }
  }

  getLayoutClassForVerticalBlock() {
    return { 'col-12': this.formConfig.layout == 'vertical' }
  }

  getInputControlClass(control: Config) {
    return { 'form-control-color': control.type == 'color', 'form-control-plaintext': control.readonly }
  }

  getErrorClass() {
    return { 'col-8 offset-4': this.formConfig.layout == 'horizontal', 'col-12': this.formConfig.layout == 'vertical' }
  }

  isError(control: Config) {
    return this.dynamicFormGroup.controls[control.name]?.invalid && this.dynamicFormGroup.controls[control.name]?.touched
  }
}
