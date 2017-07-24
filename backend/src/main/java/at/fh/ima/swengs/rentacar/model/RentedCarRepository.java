package at.fh.ima.swengs.rentacar.model;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by Amar on 12.01.2017.
 */

@RepositoryRestResource()
public interface RentedCarRepository  extends PagingAndSortingRepository<RentedCar, Long> {

    @Query(value= "SELECT id FROM rented_car "
            + "where customer_id = ?1 and car_id = ?2",nativeQuery=true)
    public int findRentedCarId( @Param("customer") int customer,@Param("car") int car);

    @Query(value= "SELECT rc.* FROM rented_car rc "
            + "where customer_id = ?1 and car_id = ?2",nativeQuery=true)
    public RentedCar findRentedCar( @Param("customer") int customer,@Param("car") int car);

/*
    @Transactional
    @Modifying
    @Query(value= "update rented_car rc "
            + "set rc.lease_time = ?2 "
            + "where rc.id = ?1" ,nativeQuery=true)
    public void updateLeaseTime(@Param("rentedCar") int rentedCar, @Param("leaseTime") int leaseTime);
*/


}

