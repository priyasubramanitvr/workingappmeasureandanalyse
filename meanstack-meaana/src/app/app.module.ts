import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatIconModule,
  MatTableModule,
  MatTableDataSource,
  MatGridListModule,
  MatTabsModule
} from "@angular/material";

import { AppComponent } from "./app.component";


import { AppRoutingModule } from "./app-routing.module";


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserTableComponent } from './usertable/usertable.component';

import { SixSigmaComponent } from './sixsigma/sixsigma.component';
import { MeasureComponent } from './dmaic/measure/measure.component';
import { AnalyseComponent } from './dmaic/analyse/analyse.component';
import { ImplementComponent } from './dmaic/implement/implement.component';
import { ControlComponent } from './dmaic/control/control.component';




@NgModule({
  declarations: [
    AppComponent,
    
    UserTableComponent,
    LoginComponent,
    SignupComponent,
    SixSigmaComponent,
    MeasureComponent,
    AnalyseComponent,
    ImplementComponent,
    ControlComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatGridListModule,

    FormsModule,
    MatExpansionModule,
  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
