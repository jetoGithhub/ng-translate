import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  param = {value: 'jefferson'};
  messages = 'El message tipo';

  constructor(private translate: TranslateService){

  }
  changeLanguage(language: string){
  	this.translate.use(language);
  }

}
