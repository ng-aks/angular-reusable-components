import { Component } from '@angular/core';
import { FORM_CONFIG } from './core/app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';
  formConfig = FORM_CONFIG
}
