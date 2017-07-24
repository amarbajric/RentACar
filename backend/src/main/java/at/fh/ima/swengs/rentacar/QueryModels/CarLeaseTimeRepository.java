package at.fh.ima.swengs.rentacar.QueryModels;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Created by Amar on 12.01.2017.
 */
@RepositoryRestResource
public interface CarLeaseTimeRepository extends PagingAndSortingRepository<CarLeaseTime, Long> {


    @Query(value = "SELECT c.*, rc.lease_time from car c JOIN rented_car rc on c.id = rc.car_id WHERE rc.customer_id = ?1", nativeQuery = true)
    public List<CarLeaseTime> findByCustomer(@Param("customer") int customer);

}