import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated() {
    return this.http.get<any>(this.URL_API+'/isLogged',{
      withCredentials:true
    });
  }

  isConnect(){
    return this.http.get<any>(GLOBAL.URLSHOP+'/connect',{
      withCredentials:true
    });
  }
}
