import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth-module/components/login/login.component';
import { RegisterComponent } from './auth-module/components/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio'; 
import { HttpClientModule} from '@angular/common/http'
import {MatCardModule} from '@angular/material/card'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { CoursesComponent } from './staff-module/courses/courses.component';
import { CourseContentComponent } from './staff-module/course-content/course-content.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CoursesComponent,
    CourseContentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
