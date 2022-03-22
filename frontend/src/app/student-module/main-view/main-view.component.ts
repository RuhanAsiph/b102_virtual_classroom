import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  courses: any = []
  id: any;
  constructor(private authService:AuthService, private router:Router, private activatedRoute:ActivatedRoute) { 
    
  }
  


  ngOnInit(): void {
    this.getCourses()
  }


  getCourses(){
    this.authService.getStudentCourses().subscribe((res: any) => {
      if (res.status === 200) {
        this.courses = res.data
      } else {
        console.log("inside main-view ts get courses function")
      }
    })
  }

  details(id:any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    }
    this.router.navigate(['/student-detail'], navigationExtras)
  }
}


