import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
	imports: [
 		HttpClientModule,
    	TranslateModule.forRoot({
	        loader: {
	            provide: TranslateLoader,
	            useFactory: (createTranslateLoader),
	            deps: [HttpClient]
	        }
	    }),
	],
	exports: [TranslateModule]
})
export class AppTranslate{ }