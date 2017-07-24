/**
 * Created by Christian on 1/17/2017.
 */


import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CarSearchComponent} from "./car-search.component";

import {CarSearchRouterModule} from "./car-search.routes";
import {CarService} from "../services/car.service";
import {SharedModule} from "../shared/shared.module";
import {RentedCarService} from "../services/rentedCar.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarSearchRouterModule,
    SharedModule
  ],
  declarations: [
    CarSearchComponent,

  ],
  exports: [
    CarSearchComponent
  ],
  providers: [
    CarService, RentedCarService
  ]
})

export  class CarSearchModule {

}
