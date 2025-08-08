import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NgAksEditorService } from '../ng-aks-editor.service';

@Component({
  selector: 'lib-rich-text-editor',
  imports: [],
  templateUrl: './rich-text-editor.html',
  styleUrl: './rich-text-editor.css'
})
export class RichTextEditor implements AfterViewInit {
  @ViewChild('editor') editor!: ElementRef<HTMLDivElement>;
  content: string = '';
  editorService = inject(NgAksEditorService);
  ngAfterViewInit() {
    this.editor.nativeElement.innerHTML = this.content;
    this.editor.nativeElement.focus();
  }

  execCommand(command: string, value?: string) {
    document.execCommand(command, false, value);
    this.editor.nativeElement.focus();
    this.saveContent();
  }

  saveContent() {
    this.content = this.editor.nativeElement.innerHTML;
    this.editorService.getEditorContent.set(this.content);
  }

  formatText(style: string) {
    this.execCommand(style);
  }

  setFontSize(size:any) {
    this.execCommand('fontSize', '4');
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.fontSize = size.target.value;
      range.surroundContents(span);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    this.saveContent();
  }
}
