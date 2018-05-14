import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the HomiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homie',
  templateUrl: 'homie.html',
})
export class HomiePage {

  constructor(private aFAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.aFAuth.authState.subscribe(data=> {
      if(data && data.email && data.uid){
      this.toast.create({
        message:`Welcome to Alps Venture, ${data.email}`,
        duration:3000
      }).present(); 
    } else {
      this.toast.create({
        message:`Could not find authentication details`,
        duration: 3000
      }).present();
    }
    }
    );
  }

}
