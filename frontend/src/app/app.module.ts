import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
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
import {MatDialogModule} from '@angular/material/dialog';
import { MaterialuploadDialogComponent } from './staff-module/materialupload-dialog/materialupload-dialog.component';
import { OtherMaterialsComponent } from './staff-module/other-materials/other-materials.component';
import { EditMaterialsComponent } from './staff-module/edit-materials/edit-materials.component';
import { MainViewComponent } from './student-module/main-view/main-view.component';
import { DetailPageComponent } from './student-module/detail-page/detail-page.component'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxStarsModule } from 'ngx-stars';
import {MatTabsModule} from '@angular/material/tabs'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CoursesComponent,
    CourseContentComponent,
    MaterialuploadDialogComponent,
    OtherMaterialsComponent,
    EditMaterialsComponent,
    MainViewComponent,
    DetailPageComponent
    
    
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
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatExpansionModule,
    NgxStarsModule,
    MatTabsModule
  ],
  entryComponents: [MaterialuploadDialogComponent, OtherMaterialsComponent, EditMaterialsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
