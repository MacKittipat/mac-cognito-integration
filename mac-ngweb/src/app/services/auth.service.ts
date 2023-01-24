import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {CognitoUser, CognitoUserPool} from "amazon-cognito-identity-js";
import {Subject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly cognitoUserPool: CognitoUserPool;
  private loggedInUser = new Subject<any>();

  constructor() {
    let cognitoPoolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId,
    };
    this.cognitoUserPool = new CognitoUserPool(cognitoPoolData);
  }

  getCognitoUserPool(): CognitoUserPool {
    return this.cognitoUserPool;
  }

  isLoggedIn(): boolean {
    let isValid = false;
    let cognitoUser = this.cognitoUserPool.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.getSession((error: Error, session: any) => {
        if (error) {
          console.log(`Error : ${JSON.stringify(error)}`)
        } else {
          isValid = session.isValid();
        }
      });
    }
    return isValid;
  }

  setLoggedInUser(loggedInUser: CognitoUser | null) {
    this.loggedInUser.next(loggedInUser);
  }

  getLoggedInUser(): Observable<any> {
    return this.loggedInUser.asObservable();
  }
}
