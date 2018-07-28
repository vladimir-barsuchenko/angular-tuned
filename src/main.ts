import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';

function disableConsoleApi() {
  if (typeof console['_commandLineAPI'] !== 'undefined') {
    console['API'] = console['_commandLineAPI'];
  } else if (typeof console['_inspectorCommandLineAPI'] !== 'undefined') {
    console['API'] = console['_inspectorCommandLineAPI'];
  } else if (typeof console.clear !== 'undefined') {
    console['API'] = console;
  }

  console['API'].clear();
}

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}
