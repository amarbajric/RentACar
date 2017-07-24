/**
 * Created by Christian on 1/17/2017.
 */


import {Injectable, Inject} from "@angular/core";

import {Http, URLSearchParams, Headers} from "@angular/http";
import {Car} from "../entities/car";
import {BASE_URL_CARS} from "../app.tokens";
import {Observable} from "rxjs";
import {CustomerLoginService} from "./customer-service/customer-login.service";
@Injectable()
export class CarService{

  cars: Array<Car> = [];

  constructor(
    @Inject(BASE_URL_CARS) private baseUrl: string,
    private http: Http,private customerLoginService:CustomerLoginService){

  }

  public find(searchValue: string, searchType:string) : void {
      let url = this.baseUrl+"/search/findBy"+searchType;

      let search = new URLSearchParams();
      search.set(searchType.charAt(0).toLowerCase()+searchType.slice(1), searchValue);

      let headers = new Headers();
      headers.set('Accept', 'application/json');
      headers.set('Authorization', this.customerLoginService.authorizationHeader());

      //headers.set('Authorization', 'Basic ' + btoa('admin:admin')); //basic auth

    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json()["_embedded"]["cars"])
      .subscribe(
        (cars) => {
            this.cars = cars;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );

  }
  public findAll():void {
    let url = this.baseUrl+"/search/findAllAvailableCars";

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.customerLoginService.authorizationHeader());


    this
      .http
      .get(url, {headers})
      .map(resp => resp.json()["_embedded"]["cars"])
      .subscribe(
        (cars) => {
          this.cars = cars;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }

  public findById(id:string): Observable<Car> {
    let url = this.baseUrl+"/search/findById";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.customerLoginService.authorizationHeader());

    return this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json());
  }


  //load cars in My Cars Tab
  loadMyCars() {
    let url = "https://localhost:8080/carLeaseTimes/search/findByCustomer";
    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.customerLoginService.authorizationHeader());

    let search = new URLSearchParams();
    search.set('customer', this.customerLoginService.getUserInfos().id);


    this
      .http
      .get(url,{headers, search})
      .map(resp => resp.json()["_embedded"]["carLeaseTimes"])
      .subscribe(
        (cars) => {
          this.cars = cars;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }



  delete(id:string):void{
    let url = this.baseUrl+"/search/findByCustomer";
    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.customerLoginService.authorizationHeader());

    let search = new URLSearchParams();
    search.set('customer', this.customerLoginService.getUserInfos().id);

    this
      .http
      .delete(url,{headers, search})
      .map(resp => resp.json()["_embedded"]["cars"])
      .subscribe(
        (cars) => {
          this.cars = cars;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }
}
