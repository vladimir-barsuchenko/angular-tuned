import { NgModule } from '@angular/core';

import { environment } from '../../environments/environment';
// use local sw fix until it's merged
// https://github.com/angular/angular/pull/21231
import { ServiceWorkerModule, SwPush } from './src';


@NgModule({
  imports: [
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  exports: [ServiceWorkerModule],
})
export class ServiceWorkerConfigModule {
  constructor(swPush: SwPush) {
    swPush.requestSubscription({
      serverPublicKey: environment.serverPublicKey,
    });
  }
}
