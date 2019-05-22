import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth/authservice';
import { Router } from '@angular/router';


@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {

  

  constructor(public authService: AuthService,
    private router:Router) {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createUser(form.value.firstname,form.value.lastname,form.value.phonenumber,form.value.email,form.value.password);
  }
 // onclick(){
   // this.router.navigate(['']);
  //}
}
