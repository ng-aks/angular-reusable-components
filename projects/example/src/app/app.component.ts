import { AfterViewInit, Component } from '@angular/core';
import { FORM_CONFIG } from './core/app.constant';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';
  formConfig = FORM_CONFIG;
  formGroup!: FormGroup;

  onSubmitForm(e: any) {
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
