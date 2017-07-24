import {Component} from '@angular/core';
import {CustomerLoginService} from "./services/customer-service/customer-login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private customerLoginService:CustomerLoginService,private router:Router){

  }

  isLoggedIn(): boolean{
    return this.customerLoginService.isLoggedIn();
  }

  logOut() {
    this.customerLoginService.logOut();
    this.router.navigateByUrl('/login');
  }



}
