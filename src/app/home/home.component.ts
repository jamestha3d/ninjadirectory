import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeTitle = "Welcome to the ninja directory!..";
  myString = "welcome to the jungle";
  myBoolean = true;
  ninja = {
    name: "Yoshi",
    belt: "Black"
  };
  
  alertMe(val: any) {
    alert(val);
  }
}
