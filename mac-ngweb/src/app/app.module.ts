import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {SignUpComponent} from './compontents/signup/sign-up.component';
import {HomeComponent} from './compontents/home/home.component';
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignInComponent } from './compontents/signin/sign-in.component';
import { ProfileComponent } from './compontents/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductComponent } from './compontents/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    SignInComponent,
    ProfileComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
