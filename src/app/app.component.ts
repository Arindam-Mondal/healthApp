import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCl0c2t4UzZpn4_cDg4_9yanID7gdOCL-0",
      authDomain: "health-app-aa405.firebaseapp.com"
    });
  }

  title = 'app works!';
}
