import { Component } from '@angular/core';
import {CustomerLoginService} from "../services/customer-service/customer-login.service";

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class PageNotFoundComponent {

  isLoggedIn: boolean;

  constructor(private customerLoginService:CustomerLoginService){

  }

  ngOnInit(){
    this.isLoggedIn = this.customerLoginService.isLoggedIn();
  }

}
