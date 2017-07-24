import {Http, URLSearchParams, Headers} from "@angular/http";
import {Inject, Injectable} from "@angular/core";
import {BASE_URL_CUSTOMERS, BASE_URL_OAUTH2_TOKEN_REQUEST, CLIENT_APP_NAME, CLIENT_APP_SECRET} from "../../app.tokens";
import {isNullOrUndefined} from "util";
import {userInfo} from "os";


@Injectable()
export class CustomerLoginService {

  constructor(private http:Http,@Inject(BASE_URL_CUSTOMERS) private customersUrl:string, @Inject(BASE_URL_OAUTH2_TOKEN_REQUEST) private tokenUrl:string,
              @Inject(CLIENT_APP_NAME) private clientName:string,@Inject(CLIENT_APP_SECRET) private clientSecret:string){

  }

  public setStorage(storage: Storage) {
    this._storage = storage;
  }

  private _storage: Storage = localStorage;



  loadUserProfile(userName:string) {
    if (!this.hasValidAccessToken()) throw Error("Cannot load User Profile without access_token");
    let findbyMail = "/search/findByEmail";
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.set('Authorization', 'Bearer ' + this.getAccessToken());

      let search = new URLSearchParams();
      search.set('email', userName);

      this.http.get(this.customersUrl+findbyMail, { headers, search }).map(r => r.json()).subscribe(
        (userInfo) => {
          console.debug('userinfo received', userInfo);
          this._storage.setItem('userInfo', JSON.stringify(userInfo));
          resolve(userInfo);
        },
        (err) => {
          console.error('Error loading user info', err);
          reject(err);
        }
      );
    });


  }



  refreshCustomerData(userName:string){
    let headers = new Headers();
    headers.set('Authorization', 'Bearer ' + this.getAccessToken());
    let findbyMail = "/search/findByEmail";
    let search = new URLSearchParams();
    search.set('email', userName);
    return new Promise((resolve, reject) => {
      this.http.get(this.customersUrl + findbyMail, {
        headers,
        search
      }).map(r => r.json()).subscribe(
        (userInfo) => {
          this._storage.removeItem("userInfo");
          this._storage.setItem('userInfo', JSON.stringify(userInfo));
          resolve(userInfo);
        },
        (err) => {
          console.error('Error while refreshing user info', err);
          reject(err);
        }
      );
    });
  }


  fetchTokenUsingPasswordFlowAndLoadUserProfile(userName: string, password: string) {
    return this
      .fetchTokenUsingPasswordFlow(userName, password)
      .then(() => this.loadUserProfile(userName));
  }




  fetchTokenUsingPasswordFlow(userName: string, password: string) {

    return new Promise((resolve, reject) => {
      let search = new URLSearchParams();
      search.set('grant_type', 'password');
      search.set('username', userName);
      search.set('password', password);

      let headers = new Headers();
      headers.set('Content-Type', 'application/x-www-form-urlencoded');
      headers.set('Authorization', 'Basic ' + btoa(this.clientName + ":" + this.clientSecret));

      let params = search.toString();

      this.http
        .post(this.tokenUrl, params, { headers })
        .map(r => r.json())
        .subscribe((tokenResponse) => {
          console.debug('tokenResponse', tokenResponse);
          this.storeAccessTokenResponse(tokenResponse.access_token, tokenResponse.refresh_token, tokenResponse.expires_in);

          resolve(tokenResponse);
        },
        (err) => {
          console.error('Error performing password flow', err);
          reject(err);
        }
      );
    });

  }



  refreshToken() {

    return new Promise((resolve, reject) => {
      let search = new URLSearchParams();
      search.set('grant_type', 'refresh_token');
      search.set('refresh_token', this._storage.getItem('refresh_token'));

      let headers = new Headers();
      headers.set('Content-Type', 'application/x-www-form-urlencoded');
      headers.set('Authorization', 'Basic ' + btoa(this.clientName + ":" + this.clientSecret));

      let params = search.toString();

      this.http.post(this.tokenUrl, params, { headers }).map(r => r.json()).subscribe(
        (tokenResponse) => {
          console.debug('refresh tokenResponse', tokenResponse);
          this.storeAccessTokenResponse(tokenResponse.access_token, tokenResponse.refresh_token, tokenResponse.expires_in);
          resolve(tokenResponse);
        },
        (err) => {
          console.error('Error performing password flow', err);
          reject(err);
        }
      );
    });

  }



  logOut() {
    this._storage.clear();
  };




  private storeAccessTokenResponse(accessToken: string, refreshToken: string, expiresIn: number) {
    this._storage.setItem("access_token", accessToken);

    if (expiresIn) {
      let expiresInMilliSeconds = expiresIn * 1000;
      let now = new Date();
      let expiresAt = now.getTime() + expiresInMilliSeconds;
      this._storage.setItem("expires_at", "" + expiresAt);
    }

    if (refreshToken) {
      this._storage.setItem("refresh_token", refreshToken);
    }
  }


  getAccessToken() {
    return this._storage.getItem("access_token");
  };

  getIdToken() {
    return this._storage.getItem("id_token");
  }

  getIdentityClaims() {
    let claims = this._storage.getItem("userInfo");
    if (!claims) return null;
    return JSON.parse(claims);
  }

  getUserInfos() {
    return JSON.parse(this._storage.getItem("userInfo"));
  }



  hasValidAccessToken() {
    if (this.getAccessToken()) {

      let expiresAt = this._storage.getItem("expires_at");
      let now = new Date();
      return !(expiresAt && parseInt(expiresAt) < now.getTime());


    }
    return false;
  };



  isLoggedIn(): boolean{
    if(!isNullOrUndefined(this.getAccessToken()) && !isNullOrUndefined(this.getUserInfos())){
      return true;
    }
    else return false;
  }



  authorizationHeader() {
    return "Bearer " + this.getAccessToken();
  }

}
