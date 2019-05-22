import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserTableComponent } from './usertable/usertable.component';

import { SixSigmaComponent } from './sixsigma/sixsigma.component';
import { MeasureComponent } from './dmaic/measure/measure.component';
import { AnalyseComponent } from './dmaic/analyse/analyse.component';
import { ImplementComponent } from './dmaic/implement/implement.component';
import { ControlComponent } from './dmaic/control/control.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:"login",component:LoginComponent},
  
  { path: "signup", component: SignupComponent },
  { path:"usertable",component:UserTableComponent},
  {path:"sixsigma",component:SixSigmaComponent},
  {path:"measure",component:MeasureComponent},
  {path:"analyse",component:AnalyseComponent},
  {path:"implement",component:ImplementComponent},
  {path:"control",component:ControlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}