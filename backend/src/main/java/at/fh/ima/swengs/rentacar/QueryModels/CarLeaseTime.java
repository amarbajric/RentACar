package at.fh.ima.swengs.rentacar.QueryModels;

import javax.persistence.*;

/**
 * Created by Amar on 12.01.2017.
 */

@Entity
public class CarLeaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String brand;
    private String model;
    private int kilometers;
    private int seatNumber;
    private String color;
    private String constructionYear;
    private String gasType;
    private String transmission;
    private int horsePower;
    private int leaseTime;

    @Version
    private long version;


    public CarLeaseTime() {
    }

    public CarLeaseTime(long id, int leaseTime, String brand, String model, int kilometers, int seatNumber, String color, String constructionYear, String gasType, String transmission, int horsePower) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.kilometers = kilometers;
        this.seatNumber = seatNumber;
        this.color = color;
        this.constructionYear = constructionYear;
        this.gasType = gasType;
        this.transmission = transmission;
        this.horsePower = horsePower;
        this.leaseTime = leaseTime;

    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getKilometers() {
        return kilometers;
    }

    public void setKilometers(int kilometres) {
        this.kilometers = kilometers;
    }

    public int getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(int seatNumber) {
        this.seatNumber = seatNumber;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getConstructionYear() {
        return constructionYear;
    }

    public void setConstructionYear(String constructionYear) {
        this.constructionYear = constructionYear;
    }

    public String getGasType() {
        return gasType;
    }

    public void setGasType(String gasType) {
        this.gasType = gasType;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public int getHorsePower() {
        return horsePower;
    }

    public void setHorsePower(int horsePower) {
        this.horsePower = horsePower;
    }

    public int getLeaseTime() {
        return leaseTime;
    }

    public void setLeaseTime(int leaseTime) {
        this.leaseTime = leaseTime;
    }
}
