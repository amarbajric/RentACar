package at.fh.ima.swengs.rentacar.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.provider.NoSuchClientException;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * @author Amar
 *
 * My own UserDetailsService which checks the Customer table by email and password and if its valid, returns a token
 * Guide: https://github.com/scratches/jpa-method-security-sample/blob/master/src/main/java/demo/Application.java
 */


@Service
public class Customers implements UserDetailsService {

    private CustomerRepository repo;

    @Autowired
    public Customers(CustomerRepository repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        Customer customer = repo.findByEmail(email);
        if (customer == null) {
            throw new NoSuchClientException("No customer found with email: " + email);
        }
        List<GrantedAuthority> auth = AuthorityUtils
                .commaSeparatedStringToAuthorityList("ROLE_USER");
        if (email.endsWith("@admin-rent-a-car.com")) {
            auth = AuthorityUtils
                    .commaSeparatedStringToAuthorityList("ROLE_ADMIN");
        }
        String password = customer.getPassword();
        return new org.springframework.security.core.userdetails.User(email, password, auth);
    }

}
