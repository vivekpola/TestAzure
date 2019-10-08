import { Injectable } from '@angular/core';
import {Http, Headers} from  '@angular/http';

@Injectable()
export class AuthguardService {
isAuthenticated: boolean = false;
  constructor(private http: Http) {}
  
  authenticatenow(usercreds) {
        var headers = new Headers();
        var creds = 'ntuser=' + usercreds.username + '&helpall=' + usercreds.password+'&clientip='+usercreds.clientip;
        console.log(JSON.stringify(creds));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise((resolve) => {
        this.http.post('http://10.21.23.221:4202/login', creds, {headers: headers}).subscribe((data) => {
            console.log(data.json());
            if(data.json().noError) {
                window.localStorage.setItem('auth_key', usercreds.username);
                window.localStorage.setItem('userName', data.json().userName);
                window.localStorage.setItem('role', data.json().role);
                window.localStorage.setItem('pernr', data.json().pernr);
                window.localStorage.setItem('userSubteam', data.json().userSubteam);
                window.localStorage.setItem('user_id', data.json().user_id);
                window.localStorage.setItem('isVector', data.json().isVector);
                window.localStorage.setItem('position', data.json().position);
                window.localStorage.setItem('email_id', data.json().email_id);
                this.isAuthenticated = true;
              }
                resolve(this.isAuthenticated);
            }
        )
        
        })
    }

}
