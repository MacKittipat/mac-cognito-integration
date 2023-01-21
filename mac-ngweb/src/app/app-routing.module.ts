import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./compontents/home/home.component";
import {SignUpComponent} from "./compontents/signup/sign-up.component";
import {SignInComponent} from "./compontents/signin/sign-in.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
