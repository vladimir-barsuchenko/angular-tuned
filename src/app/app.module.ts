import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerConfigModule } from './modules/service-worker-config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgrxModule } from './modules/ngrx.module';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-tuned' }),
    AppRoutingModule,
    BrowserAnimationsModule,

    // Custom modules
    ServiceWorkerConfigModule,
    NgrxModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
