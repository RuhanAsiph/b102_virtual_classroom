import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {
  courseDetail: any = []
  courseId: any;
  constructor(private authService: AuthService, private router:Router, private activatedRoute:ActivatedRoute) { 
    this.courseId = this.activatedRoute.snapshot.queryParamMap.get("id")
  }

  ngOnInit(): void {
    this.getCourseContent()
  }

  getCourseContent() {
    this.authService.getContent(this.courseId).subscribe((res:any) => {
      if (res.status === 200) {
        this.courseDetail = res.data
      }
    })
  }

}
