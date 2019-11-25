import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  template:"<p>loading ... </p>"
 })
export class HomePage {

  constructor(private iab: InAppBrowser,public platform: Platform) { 

    let webSite = "https://www.google.com";

    platform.ready().then(() => {

      // const browser = this.iab.create('https://ionicframework.com/');

      // browser.close();

      let browser = this.iab.create( webSite,'_blank',{zoom:'no',location:'no'});
     
      browser.show();
     
      
    });

  }

}
