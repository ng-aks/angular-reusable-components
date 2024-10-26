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
    name?: ValidationName,
    pattern?: string,
    customValidation?: CustomValidation,
    message?: string,
    maxLength?: number,
    minLength?: number,
    max?: number, // only for number input
    min?: number, // only for number input

}

export interface CustomValidation{
    name: string,
    message: string
}

export enum ValidationName {
    Required = 'required',
    Pattern ='pattern',
    Email = 'email',
    MaxLength = 'maxlength',
    MinLength = 'minlength',
    Max = 'max', // only for number input
    Min = 'min' // only for number input
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
