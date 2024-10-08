import { NgModule } from '@angular/core';
import { NgAksFormsComponent } from './ng-aks-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    NgAksFormsComponent,
    FormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    NgAksFormsComponent,
    FormComponent
  ]
})
export class NgAksFormsModule { }
