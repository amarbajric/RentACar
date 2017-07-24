# __RentACar-Backend__
The backend part of the _RentACar_ Application is a Spring Boot Application, which is providing a REST API for the frontend section, which can be found in the _frontend_ folder of this repository.

_Author: Amar Bajric_

## Features:
* REST API (using HATEOAS)
* HAL Browser
* HTTPS (HTTP over SSL)
* BASIC Authentication
* OAuth2 Authorization Server
    * Security Configuration
    * Resource Server Configuration


## Prerequisites:
* MySQL DB should be provided and configured in the `application.properties` file.
* Client application will be needed to send requests and receive responses. Further, a client application
 (e.g. Postman or front-end application) is needed for requesting and receiving access tokens.


## Usage:
In order to run the application, simply execute the `main()` method (located in the `RentACarBackendApplication`).
The application will expose data with the `HATEOAS` standard. You can access the `REST API` by opening the following link
in your web browser, or by sending a GET Method with Postman: [https://lcoalhost:8080/](https://lcoalhost:8080/)
By default, you will only be eligible to access the root path of the `REST API`. If you are trying to access subpaths
you will receive the following:

```
{
     "error": "unauthorized",
     "error_description": "An Authentication object was not found in the SecurityContext"
}
```

This means that you have to first make a `BASIC` authentication with your client application.
The `BASIC` authentication can be done by providing following credentials:
* username: `my-trusted-client-app`
* password: `Pa$$w0rd`

In addition, the client application has to visit the following link, and provide user credentials (e.g. email and password of a normal user)
to receive a valid response: `POST` [https://localhost:8080/oauth/token?grant_type=password&username=bill&password=abc123](https://localhost:8080/oauth/token?grant_type=password&username=bill&password=abc123)
The username, in this example, is `bill` and the password is `abc123`.

__ATTENTION__:
In order to try out this application, you can use the following credentials:
* email(which is the username): _amar.bajric@gmail.com_
* password: _password_

Now the `OAuth2 Authorization Server` will see that a known client application is asking for a token, and will grant access to the `Authorization Server`.
With the username (can also be an email later on) and the password provided in the `URL`, `OAuth2` checks if there is a user with these credentials. If this is true, the response will look something like this:

```
{
  "access_token": "6317b0b4-ecb0-49af-a266-c6746b98caa3",
  "token_type": "bearer",
  "refresh_token": "731bca23-f082-4bd5-8aed-c7b303778326",
  "expires_in": 3599,
  "scope": "read write trust"
}
```

With the `access_token` the client application can now make all actions.
The token has to be appended after the link itself:
__https://localhost:8080/cars/?access_token=6317b0b4-ecb0-49af-a266-c6746b98caa3__