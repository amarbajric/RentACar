/**
 * Created by Christian on 1/19/2017.
 */
import {NgModule} from "@angular/core";
import { CommonModule} from '@angular/common';
import {CarCardComponent} from "../car-card/car-card.component";
import {CustomerService} from "../services/customer-service/customer.service";
import {CustomerLoginService} from "../services/customer-service/customer-login.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarCardComponent
  ],
  providers: [
    CustomerService,
    CustomerLoginService
  ],
  exports: [
    CarCardComponent
  ]

})
export class SharedModule {

}
