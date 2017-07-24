import {Component} from '@angular/core';
import {CustomerLoginService} from "../services/customer-service/customer-login.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private customerLoginService:CustomerLoginService,private router:Router){

  }

  ngOnInit(){
    this.isLoggedIn = this.customerLoginService.isLoggedIn();
  }

  isLoggedIn:boolean;
  email:string;
  password:string;
  message:string;


  login(){
    this.customerLoginService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.email,this.password).then((response) => {
      console.log(this.customerLoginService.getUserInfos());
      this.router.navigateByUrl('/home')
    }).catch((error) => {
      // console.log(error);
      this.message = "Error while trying to authenticate!";
      setTimeout(function() {
        this.message = "";
        this.message = false;
      }.bind(this), 3000);
    });
  }


}

