import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthguardService} from './authguard.service';

@Component({
  selector: 'app-signin',
  moduleId: module.id,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthguardService]
})
export class SigninComponent implements OnInit {
  errorMessage;
   localUser = {
     username: '',
     password: '',
     clientip:''
   };
  model: any = {};
  constructor(private auth: AuthguardService, private router: Router) {}
  ngOnInit() {}
  login() {
    this.localUser.username = this.model.username;
    this.localUser.password = this.model.password;
    this.localUser.clientip = "temp_null";
    console.log(JSON.stringify(this.localUser));
    let checknow = this.auth.authenticatenow(this.localUser);
    checknow.then((res) => {
      if(res) {
       this.router.navigate(['/home']);
       location.reload();
        console.log('welcome');
      }
      else {
        this.errorMessage = "Error: Invalid credential...";
        console.log('Invalid user');
      }
    })    
  }

}
