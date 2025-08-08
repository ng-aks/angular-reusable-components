# Angular Custom Rich Text Editor

A Rich text editor based in angular, that can implement with multiple text editing features with image upload, add hyper links and more features.

## Versions Info

| Angular  | Bootstrap  | ng-aks-editor |
| :------------ |:------------|:------------|
| 20.x.x    | 5.x.x | 1.x.x |

## Setup - How to use Rich Text Editor in our project

Run `npm i @ng-aks/editor` to install this library in your project. After install add `NgAksEditor` in related component file where you want to use this form library.

```ts
import { NgAksEditor } from '@ng-aks/editor';

@Component({
  selector: 'app-root',
  imports: [NgAksEditor, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
});
editorService = inject(NgAksEditorService);
//this.editorService.getEditorContent() // for get editor content
```

now you have to add html part like this

```html
<ng-aks-editor/>
```
After add html part, to get editor content, inject `NgAksEditorService` in your `.ts` file use that file to get editor content like below.
`editorService = inject(NgAksEditorService);` in `.ts` file and use `this.editorService.getEditorContent()` for get editor content.

## Further help

To get more help on the this , please contact to [Ankit Kumar Sharma](https://www.ankitkumarsharma.com/)

If you get any issue, error or query, you can raise it on [GitHub Issues](https://github.com/ng-aks/angular-reusable-components/issues) also.

Thanks
