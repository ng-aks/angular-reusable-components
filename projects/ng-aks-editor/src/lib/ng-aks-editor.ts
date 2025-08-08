import { Component } from '@angular/core';
import { RichTextEditor } from "./rich-text-editor/rich-text-editor";

@Component({
  selector: 'ng-aks-editor',
  imports: [RichTextEditor],
  template: `
    <lib-rich-text-editor/>
  `,
  styles: ``
})
export class NgAksEditor {

}
