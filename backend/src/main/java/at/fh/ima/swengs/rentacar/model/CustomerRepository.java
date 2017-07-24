package at.fh.ima.swengs.rentacar.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Amar on 12.01.2017.
 */


@RepositoryRestResource
public interface CustomerRepository extends CrudRepository<Customer, Long> {

    /**
     * Is needed for the Customers which implements UserDetailService in order to search for customer by email!
     */
    Customer findByEmail(@Param("email") String email);
}


