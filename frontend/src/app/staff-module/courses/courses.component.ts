import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: any = []
  

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getCourses()
  }


  content(course: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: course
      }
    }
    this.router.navigate(['course-content'], navigationExtras)
  }
  getCourses(){
    this.authService.getCourses().subscribe((res:any) => {
      if (res.status === 200) {
        this.courses = res.data
      }
    })
  }
}
