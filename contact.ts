import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  // private itemsCollection : AngularFirestoreCollection<Item>;
  // item: Observable<Item[]>;
  constructor(public navParams: NavParams,
    public nav: NavController,public afs: AngularFirestore ) {
      afs.firestore.collection("contacts").doc('my-contacts');
    //  this.itemsCollection = afs.collection<Item[]>('contacts')
    //  .doc('my-contacts');
    //     this.item = this.itemsCollection.valueChanges();
   }
}
