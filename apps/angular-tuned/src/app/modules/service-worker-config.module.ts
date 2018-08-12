import { NgModule } from '@angular/core';

import { environment } from '../../environments/environment';
import { ServiceWorkerModule, SwPush } from '@angular/service-worker';

@NgModule({
  imports: [
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  exports: [ServiceWorkerModule],
})
export class ServiceWorkerConfigModule {
  constructor(swPush: SwPush) {
    swPush
      .requestSubscription({
        serverPublicKey: environment.serverPublicKey,
      })
      .then((subscription) => {
        console.log(subscription);
      });
  }
}
