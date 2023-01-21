import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {CognitoUser, CognitoUserPool} from "amazon-cognito-identity-js";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly cognitoUserPool: CognitoUserPool;

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


  // isLoggedIn(): boolean {
  //   let cognitoUser = this.cognitoUserPool.getCurrentUser();
  // }
}
