import { AfterViewInit, Component } from '@angular/core';
import { FORM_CONFIG } from './core/app.constant';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'example';
  formConfig = FORM_CONFIG;
  formGroup!: FormGroup;
  isGetForm: boolean = false;

  ngAfterViewInit(): void {
    this.isGetForm = true;
  }
  onSubmitForm(e: any) {
    console.log("form value", e);
  }
  getForm(e: any) {
    this.formGroup = e;
  }
  onGetForm() {
    if (this.formGroup.valid) {
      console.log("form value", this.formGroup.value);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
