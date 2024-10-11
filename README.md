# Angular Dynamic Forms

A JSON based Form builder library for Angular framework.
This library will elp you to create dynamic forms wit elp of simple json format.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Versions Info

| Angular  | Bootstrap  | ng-aks-forms |
| :------------ |:------------|:------------|
| 16.x.x     | 5.x.x | 1.x.x |

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
      value: 'Ankit Kumar Sharma',
      layout: Layout.Horizontal,
      disabled: true,
      validations: [
        {
          name: 'required',
          validator: 'required',
          message: 'Name is required',
        },
      ],
    },
    {
      type: ControlType.Text,
      label: 'City',
      name: 'city',
      value: 'Gurgaon',
      layout: Layout.Horizontal,
      readonly: true,
      validations: [],
    },
    {
      type: ControlType.Textarea,
      label: 'Description',
      name: 'description',
      value: '',
      layout: Layout.Horizontal,
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
      layout: Layout.Horizontal,
      validations: [],
    },
    {
      type: ControlType.Select,
      label: 'Country',
      name: 'country',
      value: 1,
      layout: Layout.Horizontal,
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

## Models Supports

```ts
export interface NgAksFormsConfigModel {
    type: ControlType,
    label: string,
    name: string,
    value?: string | number | boolean,
    options?: Options[];
    validations?: Validations[],
    inlineCheckOptions?: boolean,
    placeholder?: string,
    disabled?: boolean,
    readonly?: boolean,
    layout?: Layout
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

export enum Layout {
    Horizontal = 'horizontal',
    Vertical ='vertical'
}

export enum ControlType {
    Text = 'text',
    Password = 'password',
    Select = 'select',
    Radio = 'radio',
    Checkbox = 'checkbox',
    Textarea = 'textarea',
    Number = 'number',
    Email = 'email',
    Date = 'date',
    Time = 'time',
    Color = 'color',
    File = 'file',
    Switch = 'switch',
    Datalist = 'datalist'
}

```

## Dependencies

Please add `"bootstrap": "^5.x.x"` by run command `npm install bootstrap@5`. After install it, 

please add css on global style file >> 

`@import '~bootstrap/dist/css/bootstrap.min.css';`

## Further help

To get more help on the this , please contact to [Ankit Kumar Sharma](https://www.ankitkumarsharma.com/)

Thanks
