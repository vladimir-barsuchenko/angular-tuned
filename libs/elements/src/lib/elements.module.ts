import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ButtonComponent],
  entryComponents: [ButtonComponent],
})
export class ElementsModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('app-custom-button', customButton);
  }

  ngDoBootstrap(): void {}
}
