import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationDetails, CognitoUser} from "amazon-cognito-identity-js";
import {AuthService} from "../../services/auth.service";

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

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  onSubmit() {
    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    let authDetails = new AuthenticationDetails({
      Username: this.signInForm.value.username || '',
      Password: this.signInForm.value.password || ''
    });

    let userData = {Username: this.signInForm.value.username || '', Pool: this.authService.getCognitoUserPool()};
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
