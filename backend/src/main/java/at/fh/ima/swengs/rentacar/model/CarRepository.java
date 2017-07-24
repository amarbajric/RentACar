package at.fh.ima.swengs.rentacar.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Created by Amar on 12.01.2017.
 */

@RepositoryRestResource
public interface CarRepository extends PagingAndSortingRepository<Car, Long> {

    public Car findById(@Param("id") long id);


    @Query(value = "Select * from car as c LEFT OUTER JOIN rented_car rc ON c.id = rc.car_id where rc.car_id is null and c.model = ?1", nativeQuery = true)
    public List<Car> findByModel(@Param("model") String model);

    @Query(value = "Select * from car as c LEFT OUTER JOIN rented_car rc ON c.id = rc.car_id where rc.car_id is null and c.seat_number = ?1", nativeQuery = true)
    public List<Car> findBySeatNumber(@Param("seatNumber") int seatNumber);

    @Query(value = "Select * from car as c LEFT OUTER JOIN rented_car rc ON c.id = rc.car_id where rc.car_id is null and c.gas_type = ?1", nativeQuery = true)
    public List<Car> findByGasType(@Param("gasType") String gasType);

    @Query(value = "Select * from car as c LEFT OUTER JOIN rented_car rc ON c.id = rc.car_id where rc.car_id is null and c.transmission = ?1", nativeQuery = true)
    public List<Car> findByTransmission(@Param("transmission") String transmission);

    @Query(value = "SELECT c.*, rc.lease_time from car c JOIN rented_car rc on c.id = rc.car_id WHERE rc.customer_id = ?1", nativeQuery = true)
    public List<Car> findByCustomer(@Param("customer") int customer);

    @Query(value = "Select * from car as c LEFT OUTER JOIN rented_car rc ON c.id = rc.car_id  where rc.car_id is null", nativeQuery = true)
    public List<Car> findAllAvailableCars();

    @Query(value = "Select * from car as c LEFT OUTER JOIN rented_car rc ON c.id = rc.car_id and rc.customer_id = ?1 where rc.car_id is null and c.brand = ?2", nativeQuery = true)
    public List<Car> findByBrand(@Param("customer") int customer,@Param("brand") String brand);
}
