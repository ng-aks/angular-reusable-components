import { Component, inject, signal } from '@angular/core'; 
import { NgAksEditor, NgAksEditorService } from '../../../ng-aks-editor/src/public-api';

@Component({
  selector: 'app-root',
  imports: [NgAksEditor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('example-editor');
  editorService = inject(NgAksEditorService);
}
