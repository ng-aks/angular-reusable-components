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
<ng-aks-forms [formConfig]="formConfig"></ng-aks-forms>
```
After add html part, add `formConfig` in your `.ts` file like this.
```ts
export class AppComponent {
  title = 'example';
  formConfig = FORM_CONFIG
}

export const FORM_CONFIG = [
    {
      type: 'text',
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
      type: 'textarea',
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
      type: 'number',
      label: 'Age',
      name: 'age',
      value: '',
      validations: [],
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      value: 1,
      options: [
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
Please make sure, you are using correct data format wit below model
```ts
export interface NgAksFormsConfigModel {
    type: "text" | "number" | "select" | "radio" | "checkbox" | "textarea" | "date",
    label: string,
    name: string,
    value: string | number | boolean,
    options?: Options[];
    validations: Validations[]
}

export interface Options {
    label: string,
    value: number | string | boolean
}
export interface Validations {
    name: string,
    validator: string,
    message: string
}
```

## Further help

To get more help on the this , please contact to [Ankit Kumar Sharma](https://www.ankitkumarsharma.com/)

Thanks
