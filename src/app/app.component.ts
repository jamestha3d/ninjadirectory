import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'ninja_directory';
  name = "ninja man";

  ninja2 = {
    name: "Ryu",
    belt: "Red"
  };

  yell(event: Event){
    alert("i am yelling");
  }
}
