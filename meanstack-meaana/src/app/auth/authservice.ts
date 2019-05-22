import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from './authdata';
import { LoginData } from './logindata';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({ providedIn: "root" })
export class AuthService {

  private isAuthenticated = false;
  private token: string;
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient,private router: Router) {}


  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }



  createUser( firstname:string,lastname:string,phonenumber:number,email: string, password: string) {
    const authData: AuthData = { firstname:firstname,lastname:lastname,phonenumber:phonenumber,email:email, password:password};
    this.http.post("http://localhost:3000/api/user/signup", authData)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
   const loginData: LoginData = {email: email, password: password};
   this.http.post<{token: string}>("http://localhost:3000/api/user/login", loginData)
        .subscribe(response => {
      const token = response.token;
       this.token = token;
       if (token) {
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        this.router.navigate(['/usertable']);
      }
  })
  }
}
