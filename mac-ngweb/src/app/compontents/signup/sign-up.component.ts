import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
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
    if(!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    console.log(this.signUpForm.value);
    this.userPool.signUp(<string>this.signUpForm.value.username, <string>this.signUpForm.value.password,
      [new CognitoUserAttribute({Name: 'email', Value: <string>this.signUpForm.value.email})],
      [],
      (err, result) => {
        if (err) {
          console.log(err.message || JSON.stringify(err));
          return;
        }
        if (result) {
          console.log('User ' + result.user.getUsername() + ' is registered into Cognito');
        }
        console.log('Completed SignUp')
      });
  }

}
