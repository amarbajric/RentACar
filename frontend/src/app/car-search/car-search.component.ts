import {Component} from "@angular/core";
import {Car} from "../entities/car";
import {CarService} from "../services/car.service";
import {RentedCarService} from "../services/rentedCar.service";
/**
 * Created by Christian on 1/17/2017.
 */

@Component({
  selector: 'car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})

export class CarSearchComponent {
  public searchValue :string;
  public selectedCar: Car;
  public leaseTime:number;
  public success:boolean;

  constructor(private carService: CarService, private rentedCarService: RentedCarService) {this.carService.findAll();}

  public get cars(): Array<Car> {
    return this.carService.cars;
  }

  search(searchType:string) : void {
    this.carService.find(this.searchValue, searchType);
  }

  findAll():void {
    this.carService.findAll();
  }
  select(car: Car): void {
    this.selectedCar = car;
  }

  rent(car:Car, leaseTime:number):void {
    this.rentedCarService.saveNewEntry(car.id.toString(), leaseTime).subscribe((res) =>{
        this.success = true;
        setTimeout(function() {
          this.success = false;
        }.bind(this), 3300);
        this.carService.findAll();
        this.selectedCar = null;
        this.leaseTime = null;
      },
        error => console.log(error)
    )
  }

}
