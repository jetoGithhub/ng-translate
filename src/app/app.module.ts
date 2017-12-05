import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppTranslate } from './commons/translate/translate.module'


import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import { AppComponent } from './components/main/app.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppTranslate,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
	constructor(translate: TranslateService) {
        translate.setDefaultLang(environment.language);
        translate.use(environment.language);
	}
}
