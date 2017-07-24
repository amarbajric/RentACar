package at.fh.ima.swengs.rentacar;

import at.fh.ima.swengs.rentacar.QueryModels.CarLeaseTime;
import at.fh.ima.swengs.rentacar.model.Car;
import at.fh.ima.swengs.rentacar.model.Customer;
import at.fh.ima.swengs.rentacar.model.RentedCar;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class ExposeEntityIdRestConfiguration extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Car.class);
        config.exposeIdsFor(Customer.class);
        config.exposeIdsFor(RentedCar.class);
        config.exposeIdsFor(CarLeaseTime.class);
    }
}