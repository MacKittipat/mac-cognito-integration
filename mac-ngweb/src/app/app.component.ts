import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mac-ngweb';
  username: string | undefined;

  constructor(private authService: AuthService,  private router: Router) {
  }

  ngOnInit(): void {
    this.username = this.authService.getCognitoUserPool().getCurrentUser()?.getUsername();
    console.log(`User already loggedIn = ${this.authService.isLoggedIn()}`);
  }

  signOut() {
    console.log('Signing Out ...');
    this.authService.getCognitoUserPool().getCurrentUser()?.signOut();
    this.router.navigate(['']);
  }

}
