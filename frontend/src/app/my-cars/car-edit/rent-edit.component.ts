/**
 * Created by Christian on 1/19/2017.
 */



import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RentedCarService} from "../../services/rentedCar.service";
import {Car} from "../../entities/car";
import {CarService} from "../../services/car.service";
import {RentedCar} from "../../entities/rentedCar";


@Component({
  templateUrl: './rent-edit.component.html'
})

export class RentEditComponent {
  id: string;

  constructor(
    private rentedCarService: RentedCarService,
    private carService: CarService,
    route: ActivatedRoute) {

    route.params.subscribe(
      c => {
        this.id = c['id'];
        this.load(this.id);
      }
    )

  }

  car: Car;
  rentedCar: RentedCar;


  load(id: string): void {
    this
      .carService
      .findById(id)
      .subscribe(
        car => {
          this.car = car;
        },error => console.log(error)
      );

    this
      .rentedCarService
      .findRentedCar(id)
      .subscribe((rentedCar) => {
          this.rentedCar = rentedCar;
        },
        (error) => console.log(error)
      )


  }

  save(): void {
     this
   .rentedCarService
   .save(this.rentedCar)
   .subscribe((rentedCar) => {
   this.rentedCar = rentedCar;
   this.carService.loadMyCars()
   },
     (error) => console.log(error)

   )

}
  deleteEntry(car:Car) {
    this.rentedCarService.getId(car.id);
  }

}
