# Angular Dynamic Forms

A JSON based Form builder library for Angular framework.
This library will help you to create dynamic forms with help of simple json format.

## Versions Info

| Angular  | Bootstrap  | ng-aks-forms |
| :------------ |:------------|:------------|
| 16.x.x, 17.x.x, 18.x.x    | 5.x.x | 1.x.x |

## Setup - How to use reusable dynamic forms in our project

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

export const FORM_CONFIG: NgAksFormsConfigModel = {
  config: [
    {
      type: ControlType.Text,
      label: 'Name',
      name: 'name',
      value: 'Ankit Kumar Sharma',
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
      readonly: true,
      validations: [],
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
    }
  ],
  layout: Layout.Vertical,
}
```
the above data, you can use your api data or constant data as per your requirement.
Please make sure, you are using correct data format.

## Models Supports for properties, we are using.

```ts
export interface NgAksFormsConfigModel {
    config: Config[],
    layout: Layout,
}

export interface Config {
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

please add css on global style file or you can import it from `node_modules` also directly, if it is not working. 

`@import '~bootstrap/dist/css/bootstrap.min.css';`

## Further help

To get more help on the this , please contact to [Ankit Kumar Sharma](https://www.ankitkumarsharma.com/)

If you get any issue, error or query, you can raise it on [GitHub Issues](https://github.com/ng-aks/angular-dynamic-forms/issues) also.

Thanks
