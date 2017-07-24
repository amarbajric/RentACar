package at.fh.ima.swengs.rentacar.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;


/**
 * Created by Amar on 12.01.2017.
 */

@Entity
public class RentedCar {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    @ManyToOne(targetEntity = Customer.class)
    private Customer customer;

    @OneToOne
    private Car car;

    private int leaseTime; //in days

    @Version
    private long version;


    public RentedCar(){

    }

    public RentedCar(Customer customer, Car car, int leaseTime) {
        this.customer = customer;
        this.car = car;
        this.leaseTime = leaseTime;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getLeaseTime() {
        return leaseTime;
    }

    public void setLeaseTime(int leaseTime) {
        this.leaseTime = leaseTime;
    }

    public Car getCar() { return car; }

    public void setCar(Car car) {
        this.car = car;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

}
