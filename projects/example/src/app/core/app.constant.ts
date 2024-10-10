import { ControlType, NgAksFormsConfigModel } from "projects/ng-aks-forms/src/lib/core/ng-aks-forms.model";

export const FORM_CONFIG: NgAksFormsConfigModel[] = [
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
  ];