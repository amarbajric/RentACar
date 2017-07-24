import {Component} from '@angular/core';
import {Customer} from "../entities/customer";
import {CustomerService} from "../services/customer-service/customer.service";


@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


   firstName: string;
   lastName: string;
   email: string;
   birthday: string;
   address: string;
   phoneNumber: number;
   driverLicenseNumber: string;
   password: string;


  constructor(private customerService: CustomerService){

  }

  customer: Customer;
  message: string;
  success: boolean;


  save(): void {
    this
      .customerService
      .createCustomer(this.firstName,this.lastName,this.address,this.phoneNumber,this.email,this.birthday,this.driverLicenseNumber,this.password)
      .subscribe(customer => {
        this.message = "Account was created successfully!";
        this.success = true;
          setTimeout(function() {
            this.message = false;
          }.bind(this), 3300);

        console.log(customer);
      },
        (error) => {
        this.message = "An Error occured while creating the account!";
        this.success = false;
        setTimeout(function() {
            this.message = false;
          }.bind(this), 3300);

        console.log(error);
      });

  }



}
