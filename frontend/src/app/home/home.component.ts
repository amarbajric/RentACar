import {Component} from '@angular/core';
import {CustomerLoginService} from "../services/customer-service/customer-login.service";
import {Customer} from "../entities/customer";
import {Car} from "../entities/car";
import {CarService} from "../services/car.service";


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private customerLoginService:CustomerLoginService, private carService:CarService){
    this.carService.loadMyCars();

  }


  customerInfo: Customer = this.customerLoginService.getUserInfos();

  public get cars(): Array<Car> {
    return this.carService.cars;
  }


}

