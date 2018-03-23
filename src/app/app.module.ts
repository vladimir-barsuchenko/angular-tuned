import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-tuned' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, ServiceWorker],
})
export class AppModule {
  constructor(swPushManager: PushManager) {
    swPushManager
      .subscribe({
        applicationServerKey:
          'BAtbtTlInO98duzJcw5Fo0rC20J8QPxuWqBxc4A6dOm_2NyXsBRlLbQmjfg9megpojM6Anl6Rl_CaYewtdSJA6Q',
      })
      .then((res) => {
        console.log(res);
      });
  }
}
