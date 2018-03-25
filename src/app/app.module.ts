import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerConfigModule } from './modules/service-worker-config.module';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-tuned' }),
    AppRoutingModule,
    RouterModule,
    ServiceWorkerConfigModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
