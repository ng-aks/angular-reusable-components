# Angular Dynamic Forms

This library will elp you to create dynamic forms wit elp of simple json format.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## How to use reusable dynamic forms in our project

Run `npm i @ng-aks/forms` to install this library in your project. After install add module in app.module file.

```ts
import { NgAksFormsModule } from '@ng-aks/forms';

@NgModule({
  imports: [
    NgAksFormsModule
  ],
}) 
```

now you have to add html part like this

```html
<ng-aks-forms [formConfig]="formConfig" (onSubmitForm)="onSubmitForm($event)">
    <button (click)="onGetForm()" class="btn btn-primary" type="submit">Submit</button>
</ng-aks-forms>
```
After add html part, add `formConfig` in your `.ts` file like this.
```ts
export class AppComponent {
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

export const FORM_CONFIG = [
    {
      type: ControlType.Text,
      label: 'Name',
      name: 'name',
      value: '',
      validations: [
        {
          name: 'required',
          validator: 'required',
          message: 'Name is required',
        },
      ],
    },
    {
      type: ControlType.Textarea,
      label: 'Description',
      name: 'description',
      value: '',
      validations: [
        {
          name: 'required',
          validator: 'required',
          message: 'Description is required',
        },
      ],
    },
    {
      type: ControlType.Number,
      label: 'Age',
      name: 'age',
      value: '',
      validations: [],
    },
    {
      type: ControlType.Select,
      label: 'Country',
      name: 'country',
      value: 1,
      options: [
        { label: 'Select', value: '' },
        { label: 'India', value: 1 },
        { label: 'USA', value: 2 },
        { label: 'Canada', value: 3 },
      ],
      validations: [
        {
          name: 'required',
          validator: 'required',
          message: 'Address is required',
        },
      ],
    },
  ];
```
the above data, you can use your api data or constant data as per your requirement.
Please make sure, you are using correct data format.

## Dependencies

Please add `"bootstrap": "^5.3.3"` by run command `npm install bootstrap@5.3.3`. After install it, 

please add css on global style file >> 

`@import '~bootstrap/dist/css/bootstrap.min.css';`

## Further help

To get more help on the this , please contact to [Ankit Kumar Sharma](https://www.ankitkumarsharma.com/)

Thanks
