/**
 * Created by Christian on 1/19/2017.
 */

import {Component, Output, Input} from "@angular/core";
import {Car} from "../entities/car";
import {CarService} from "../services/car.service";
import {RentedCarService} from "../services/rentedCar.service";
import {ActivatedRoute} from "@angular/router";
import {RentedCar} from "../entities/rentedCar";

@Component({
  selector: 'my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css']
})

export class  MyCarsComponent {

 public selectedCar : Car;

 public rentedCar: RentedCar;

 public message:string;
 public deleted:boolean;

  constructor(private carService:CarService, private rentedCarService:RentedCarService) {
    this.carService.loadMyCars();
  }




  public get cars(): Array<Car> {
    return this.carService.cars;
  }




  deleteEntry(car:Car) {
    this
      .rentedCarService
      .findRentedCar(car.id.toString())
      .subscribe((rentedCar) => {
          this.rentedCar = rentedCar;
          this.rentedCarService.deleteRentedCarEntry(rentedCar.id).subscribe((res) =>{
              this.carService.loadMyCars();
              this.deleted = false;
              this.message = "The Car \"" + this.selectedCar.brand + " " + this.selectedCar.model + "\" has been deleted from your rented cars!";
              this.selectedCar = null;
              setTimeout(function() {
                this.message = null;
                this.deleted = null;
              }.bind(this), 3300);
            },

            error => console.log(error)
          )
        },
        (error) => console.log(error)
      )

}
  select(car: Car): void {
    this.selectedCar = car;
  }


}
