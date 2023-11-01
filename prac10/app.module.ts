import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({
  declarations: [
  AppComponent,
  RegistrationComponent
  ],
  imports: [
  BrowserModule,
  ReactiveFormsModule, // Add ReactiveFormsModule to the imports array
  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
