import { ControlType, Layout, NgAksFormsConfigModel, ValidationName } from "../../../../ng-aks-forms/src/public-api";


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
          name: ValidationName.Required,
          message: 'Name is required',
        },
      ],
    },
    {
      type: ControlType.Text,
      label: 'Address',
      name: 'address',
      value: '',
      validations: [
        {
          name: ValidationName.MaxLength,
          message: 'Address Max Length is 10',
          maxLength: 10
        },
      ],
    },
    {
      type: ControlType.Email,
      label: 'Email',
      name: 'email',
      value: '',
      validations: [
        {
          name: ValidationName.Required,
          message: 'Email is required',
        },
        {
          name: ValidationName.Email,
          message: 'Invalid email address',
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
      type: ControlType.Number,
      label: 'Age',
      name: 'age',
      value: '',
      validations: [
        {
          customValidation: {
            name: 'ageRange',
            message:"Age range should be between 18 to 45 only"
          }
        }
      ],
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
          name: ValidationName.Required,
          message: 'Address is required',
        },
      ],
    },
    {
      type: ControlType.Radio,
      label: 'Gender',
      name: 'gender',
      value: '',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      validations: [],
      inlineCheckOptions: true,
    },
    {
      type: ControlType.Checkbox,
      label: 'Education',
      name: 'edu',
      value: '',
      options: [
        { label: 'UG', value: 'ug' },
        { label: 'PG', value: 'pg' },
      ],
      validations: [],
    },
    {
      type: ControlType.Switch,
      label: 'Are you indian?',
      name: 'indian',
      value: '',
      options: [
        { label: 'Yes', value: 'yes' },
      ],
      validations: [],
    }
  ],
  layout: Layout.Vertical,
}