import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenyaPipe } from './pipes/contrasenya.pipe';

registerLocaleData(localeEs);
registerLocaleData(localeFr);


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, CapitalizarPipe, DomseguroPipe, ContrasenyaPipe ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
