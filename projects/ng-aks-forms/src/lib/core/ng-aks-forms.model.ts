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