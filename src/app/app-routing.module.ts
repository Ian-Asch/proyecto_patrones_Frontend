import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./ui-components/home/home.component";
import { SignUpComponent } from './ui-components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
