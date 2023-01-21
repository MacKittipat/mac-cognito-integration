import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationDetails, CognitoUser, CognitoUserPool} from "amazon-cognito-identity-js";
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  userPool: CognitoUserPool;

  constructor(private fb: FormBuilder) {
    let cognitoPoolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId,
    };
    this.userPool = new CognitoUserPool(cognitoPoolData);
  }

  onSubmit() {
    if(!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    let authDetails = new AuthenticationDetails({
      Username: this.signInForm.value.username || '',
      Password: this.signInForm.value.password || ''
    })

    let userData = {Username: this.signInForm.value.username || '', Pool: this.userPool};
    let cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('Login success. ' + JSON.stringify(result))
      }, onFailure: (err) => {
        console.log(err.message || JSON.stringify(err));
      }
    });
  }

}
