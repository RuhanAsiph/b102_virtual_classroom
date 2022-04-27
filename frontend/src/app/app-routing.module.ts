import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-module/components/login/login.component';
import { RegisterComponent } from './auth-module/components/register/register.component';
import { CourseContentComponent } from './staff-module/course-content/course-content.component';
import { CoursesComponent } from './staff-module/courses/courses.component';
import { MaterialuploadDialogComponent } from './staff-module/materialupload-dialog/materialupload-dialog.component';
import { DetailPageComponent } from './student-module/detail-page/detail-page.component';
import { EnrollmentComponent } from './student-module/enrollment/enrollment.component';
import { MainViewComponent } from './student-module/main-view/main-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'course-content', component: CourseContentComponent},
  {path: 'student', component: MainViewComponent},
  {path: 'student-detail', component: DetailPageComponent},
  {path: 'enrollment', component: EnrollmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
