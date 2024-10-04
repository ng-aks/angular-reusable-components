import { NgModule } from '@angular/core';
import { NgAksFormsComponent } from './ng-aks-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgAksFormsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    NgAksFormsComponent
  ]
})
export class NgAksFormsModule { }
