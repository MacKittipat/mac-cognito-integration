import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: string = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.profile = JSON.stringify(this.authService.getCognitoUserPool().getCurrentUser());
  }
}
