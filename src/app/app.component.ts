import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  properties : Observable<any[]>;
  propertyList = new Array();
  constructor(db: AngularFireDatabase){
    let i = 0;
    db.list('/properties').valueChanges().subscribe(res => {
      console.info(i);
      console.info(res);
      this.propertyList = res;
    });
    
  }
}
