import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CognitoUserAttribute} from 'amazon-cognito-identity-js';
import {AuthService} from "../../services/auth.service";

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

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  onSubmit() {
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    console.log(this.signUpForm.value);
    this.authService.getCognitoUserPool().signUp(
      <string>this.signUpForm.value.username, <string>this.signUpForm.value.password,
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
