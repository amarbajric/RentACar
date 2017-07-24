package at.fh.ima.swengs.rentacar.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.approval.UserApprovalHandler;
import org.springframework.security.oauth2.provider.token.TokenStore;


/**
 * Authorization server is the one responsible for verifying credentials and if credentials are OK, providing the tokens[refresh-token as well as access-token].
 * It also contains information about registered clients (e.g. Angular app) and possible access scopes and grant types.
 */
/*
 * - Registers a client with client-id ‘my-trusted-client-app’ and password ‘Pa$$w0rd’ and roles & scope he is allowed for.
 * - Specifies that any generated access token will be valid for only one and a half (1h30min) hours
 * - Specifies that any generated refresh token will be valid for ten hours (only used with grant_type = password)
 */


@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {

     
    @Autowired
    private TokenStore tokenStore;
 
    @Autowired
    private UserApprovalHandler userApprovalHandler;
 
    @Autowired
    @Qualifier("authenticationManagerBean")
    private AuthenticationManager authenticationManager;
 
    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
 
        clients.inMemory()
            .withClient("my-trusted-client-app")
            .authorizedGrantTypes("password", "authorization_code", "refresh_token", "implicit")
            .authorities("ROLE_CLIENT", "ROLE_TRUSTED_CLIENT")
            .scopes("read", "write", "trust")
            .secret("Pa$$w0rd")
            .accessTokenValiditySeconds(5400).//Access token is only valid for one and a half hours.
            refreshTokenValiditySeconds(10800);//Refresh token is valid for three hours.
    }
 
    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints.tokenStore(tokenStore).userApprovalHandler(userApprovalHandler)
                .authenticationManager(authenticationManager);
    }
 
    @Override
    public void configure(AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
        oauthServer
                .tokenKeyAccess("permitAll()")
                .checkTokenAccess("isAuthenticated()");
    }
 
}