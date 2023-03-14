import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { APP_ROUTES_PROVIDER } from './app/app.routes';

import { LoginService } from './app/login.service';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
