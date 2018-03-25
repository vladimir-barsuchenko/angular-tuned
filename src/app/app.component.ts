import {
  APP_INITIALIZER,
  ChangeDetectionStrategy, Component, Injector, ModuleWithProviders, NgModule,
  PLATFORM_ID,
} from '@angular/core';
import { environment } from '../environments/environment';
import { SwPush, SwUpdate } from '@angular/service-worker';
import {
  ngswAppInitializer, RegistrationOptions,
  SCRIPT,
} from '@angular/service-worker/src/module';
import { NgswCommChannel } from '@angular/service-worker/src/low_level';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {}
}

