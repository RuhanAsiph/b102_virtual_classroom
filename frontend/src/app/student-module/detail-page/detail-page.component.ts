import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxStarsComponent } from 'ngx-stars';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {


  // @ViewChild(NgxStarsComponent)
  
  // starsComponent: NgxStarsComponent;


  details: any = [];
  panelOpenState = false;
  id: any;
  constructor(public authService: AuthService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.queryParamMap.get("id")
  }

  ngOnInit(): void {
    this.lookUp()
    // this.starsComponent.setRating(0);
  }

  getCourseImage(){
    this.authService.getStudentCourses
  }


  lookUp(){
    this.authService.lookUp(this.id).subscribe((res:any) => {
      if (res.status === 200 ) {
        this.details = res.data[0]  
      } else {
        console.log("inside lookUp()")
      }
    })
  }
}
