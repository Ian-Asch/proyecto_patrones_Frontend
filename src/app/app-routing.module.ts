import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./ui-components/home/home.component";
import { SignUpComponent } from './ui-components/signup/signup.component';
import { LoginComponent } from './ui-components/login/login.component';
import { TransporterViewComponent } from './ui-components/transporterView/transporterView.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'transporterView', component: TransporterViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
