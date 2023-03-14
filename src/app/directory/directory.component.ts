import { Component } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import { LoginService } from '../login.service';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService]
})
export class DirectoryComponent {
  classes={'blue': true, 'red': false, 'underline': true}

  ninjas = [];
  bool = null;
  name: any
  belt: any
  term: any
  //how to grab params from route
  ninja: string;

  constructor(private route: ActivatedRoute, private logger: LoginService, private dataService: DataService) {
    
    
    this.ninja = route.snapshot.params['ninja'];
  }
  logIt(){
    this.logger.log();
  }

  ngOnInit(){
    this.dataService.fetchData().subscribe(
      (data: any) => this.ninjas = data
    );
    this.fbGetData();
  }

  //hook up firebase
  fbGetData(){
    /*firebase.database().ref('/').on('child_added', (snapshot: any) => {
      //console.log(snapshot.val());
      const ans = snapshot.val();
      this.ninjas.push();

    })*/
    console.log("firebase loading");
  }

  fbPostData(ninja: any, belt: any) {
    firebase.database().ref('/').push({name: name, belt: belt});
  }
}

