import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {
  
  @ViewChild(MatTabGroup) mattabgroup!: MatTabGroup


  id: any;
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get("id")
    
   }

  //image related
  
  image: any = "";
  imageTwo: any = "";
  isExtensionError: boolean = false;
  isSizeError: boolean = false;


  //db related model
   personalData: any = {}
   addressData: any = {}
   marksData: any = {}
   pictureData: any = {}


  ngOnInit(): void {
  }

  //functionality 
  view(){
    console.log(this.personalData)
  }

  finalSubmit() {
    const finalSubmitObj = {
      courseId: this.id,
      personalData: this.personalData,
      addressData: this.addressData,
      marksData: this.marksData,
      pictureData: this.pictureData
    } 
    this.authService.sendEnrollmentDetailsOfTheStudent(finalSubmitObj).subscribe((res: any) => {
      if (res.status === 200) {
        alert(res.data)
      } else {
        alert(res.data)
      }
    })
  }



  //image and signature upload
  facePhoto(event: any) {
    let _that = this;
    this.isExtensionError = false;
    this.isSizeError = false;

    if (event.target.files[0]) {
      var file = event.target.files[0]
      var size = event.target.files[0].size
      var extension = event.target.files[0].type.replace(/(.*)\//g, ''); 
      var sizeInMb = Math.round(size/1024)
      if (sizeInMb > 1024 ) {
        this.isSizeError = true
      } else if (extension === "jpg" || extension === "png") {
        var reader: any = new FileReader();
        reader.onloadend = function () {
          _that.pictureData.image = reader.result 
        } 
        reader.readAsDataURL(file);
      } else {
        this.isExtensionError = true
      }
    }
  }


  signaturePhoto(event: any) {
    let _that = this;
    this.isExtensionError = false;
    this.isSizeError = false;

    if (event.target.files[0]) {
      var file = event.target.files[0]
      var size = event.target.files[0].size
      var extension = event.target.files[0].type.replace(/(.*)\//g, ''); 
      var sizeInMb = Math.round(size/1024)
      if (sizeInMb > 1024 ) {
        this.isSizeError = true
      } else if (extension === "jpg" || extension === "png") {
        var reader: any = new FileReader();
        reader.onloadend = function () {
          _that.pictureData.imageTwo = reader.result 
        } 
        reader.readAsDataURL(file);
      } else {
        this.isExtensionError = true
      }
    }
  }

}
