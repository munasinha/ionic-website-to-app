import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  template:"<p>loading ... </p>"
 })
export class HomePage {

  constructor(private iab: InAppBrowser,public platform: Platform) { 

    let webSite = "http://192.241.144.151:8088/admin/view";

    platform.ready().then(() => {

      // const browser = this.iab.create('https://ionicframework.com/');

      // browser.close();

      let browser = this.iab.create( webSite,'_blank',{zoom:'no',location:'no'});
     
      browser.show();
     
      
    });

  }

}
