import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  template: `<button (click)="handleClick()">{{label}}</button>`,
  styles: [
    `
      button {
        border: solid 3px;
        padding: 8px 10px;
        background: #bada55;
        font-size: 20px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ButtonComponent {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();

  private clicksCt = 0;

  handleClick(): void {
    this.clicksCt += 1;
    this.action.emit(this.clicksCt);
  }
}
