import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

export { AppServerModule } from './app/app.server.module';

if (environment.production) {
    enableProdMode();
}
