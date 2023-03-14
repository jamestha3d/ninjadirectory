import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeTitle = "Welcome to the ninja directory!..";
  myString = "welcome to the jungle";
  myBoolean = true;
  
  constructor(private logger: LoginService) {}
  logIt(){
    this.logger.log();
  }
  //use input to import ninja from the root component
  @Input() 
  ninja2: any;
  //emit event so that we can use it in different component
  @Output() onYell = new EventEmitter();

  fireYellEvent(e: Event) {
    this.onYell.emit(e);
  }

  ninja = {
    name: "Yoshi",
    belt: "Black"
  };
  
  alertMe(val: any) {
    alert(val);
  }
  
}
