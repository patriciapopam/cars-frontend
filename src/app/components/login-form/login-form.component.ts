import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email : string ="";
  password : string ="";

  submit(){
    console.log("user name is " + this.email)
    this.clear();
  }
  
  clear(){
    this.email ="";
    this.password = "";
  }
}
