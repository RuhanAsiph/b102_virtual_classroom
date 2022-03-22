import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MaterialuploadDialogComponent } from '../materialupload-dialog/materialupload-dialog.component';
import { EditMaterialsComponent } from '../edit-materials/edit-materials.component';
@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {
  courseDetail: any = []
  courseId: any;
  constructor(public dialog:MatDialog, private authService: AuthService, private router:Router, private activatedRoute:ActivatedRoute) { 
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

  materialDialog(content: any) {
    //send the data to dialog
    const dialogRef = this.dialog.open(MaterialuploadDialogComponent, {
      width: "750px",
      data: content
    });
  }

  editDialog(content: any) {
    const dialogRef = this.dialog.open(EditMaterialsComponent, {
      width: "750px", 
      data: content
    })
  }
}
