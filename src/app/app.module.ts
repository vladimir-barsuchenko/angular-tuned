import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule, SwPush } from '@angular/service-worker';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-tuned' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(swPush: SwPush) {
    swPush.requestSubscription({
      serverPublicKey:
        'BAtbtTlInO98duzJcw5Fo0rC20J8QPxuWqBxc4A6dOm_2NyXsBRlLbQmjfg9megpojM6Anl6Rl_CaYewtdSJA6Q',
    });

    swPush.messages.subscribe((msg) => {
      console.log('got push message', msg);
    });
  }
}
