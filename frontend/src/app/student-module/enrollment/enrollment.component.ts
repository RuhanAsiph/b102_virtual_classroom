import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {
  
  @ViewChild('personalDetailsForm', {static: false}) public personalForm!: NgForm;
  @ViewChild(MatTabGroup) mattabgroup!: MatTabGroup;

  
  id: any;
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get("id")
    
   }

  //image related
  
  image: any = "";
  imageTwo: any = "";
  isExtensionError: boolean = false;
  isSizeError: boolean = false;
  notSame: boolean = true;
  

  //db related model
   personalData: any = {}
   addressData: any = {}
   permanentAddressData: any = {}
   marksData: any = {}
   pictureData: any = {}


  ngOnInit(): void {
  
  }

  //functionality 
  personalDetailsNext(tabnumber: number){
    if (this.personalForm.valid){
      this.mattabgroup.selectedIndex = tabnumber;
    } else {
      alert("fill the details")
    }
  }
  addressPrev(tabnumber: any) {
    this.mattabgroup.selectedIndex = tabnumber;
  }
  addressNext(tabnumber: any){
    this.mattabgroup.selectedIndex = tabnumber;
  }
  scorePrev(tabnumber: any) {
    this.mattabgroup.selectedIndex = tabnumber;
  }
  scoreNext(tabnumber: any) {
    this.mattabgroup.selectedIndex = tabnumber;
  }
  reviewPrev(tabnumber: any) {
    this.mattabgroup.selectedIndex = tabnumber;
  }
  reviewFinal(tabnumber: any) {
    this.mattabgroup.selectedIndex = tabnumber;
  }


  finalSubmit() {
    if ( this.notSame === false ) {
      this.permanentAddressData = this.addressData
    }
    const finalSubmitObj = {
      courseId: this.id,
      personalData: this.personalData,
      addressData: this.addressData,
      permanentAddressData: this.permanentAddressData,
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

  same(){
    this.notSame = !this.notSame
    
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
