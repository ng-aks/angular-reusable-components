# Angular Reusable Components Libraries 

Angular Reusable Components Libraries with different features, we can implement with our project and reuse in different components.

## 1. Angular Dynamic JSON Reusable Forms

A JSON based Form builder library for Angular framework.
This library will help you to create dynamic forms with help of simple json format.

Run `npm i @ng-aks/forms` to install this library in your project. After install add `NgAksForms` in related component file where you want to use this form library.

[NPM URL](https://www.npmjs.com/package/@ng-aks/forms)

## 2. Angular Custom Rich Text Editor

A Rich text editor based in angular, that can implement with multiple text editing features with image upload, add hyper links and more features.

Run `npm i @ng-aks/editor` to install this library in your project. After install add `NgAksEditor` in related component file where you want to use this form library.

[NPM URL](https://www.npmjs.com/package/@ng-aks/editor)


## How to publish npm library

- Run command `npm run build <library-name>`
- Please verify that command is mentioned in `package.json` with related lib name `"pack-lib": "cd dist/<library-name> && npm pack"` – on `package.json`
- Run command `npm run pack-lib`
- After run above command, you will get updated `.tgz` file like `<library-name>-1.0.0.tgz`
- Run command `npm login`
- After logged in successfully on npm then Finally run `npm publish dist/<library-name>/<library-name>-1.0.0.tgz -–access=public` 
- After last npm publish command, you will get update version on console and you can also check on npm.

## Further help

To get more help on the this , please contact to [Ankit Kumar Sharma](https://www.ankitkumarsharma.com/)

If you get any issue, error or query, you can raise it on [GitHub Issues](https://github.com/ng-aks/angular-dynamic-forms/issues) also.

Thanks

## More Updates
Coming soon
