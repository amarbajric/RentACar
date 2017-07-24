/**
 * Created by Christian on 1/19/2017.
 */
/**
 * Created by Christian on 1/17/2017.
 */


import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CarService} from "../services/car.service";
import {MyCarsComponent} from "../my-cars/my-cars.component";
import {MyCarsRouterModule} from "./my-cars.routes";
import {SharedModule} from "../shared/shared.module";
import {RentedCarService} from "../services/rentedCar.service";
import {RentEditComponent} from "./car-edit/rent-edit.component";
import {RouterGuard} from "../services/route-guard.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyCarsRouterModule,
    SharedModule

  ],
  declarations: [
    MyCarsComponent,
    RentEditComponent

  ],
  exports: [
    MyCarsComponent
  ],
  providers: [
    CarService,
    RentedCarService,
    RouterGuard
  ]
})

export  class MyCarsModule {

}
