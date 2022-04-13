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
  dummyDataTobeSentToTheBackend:any = {}
  dataOne: any = {}
  dataTwo: any = {}
  dataFour: any = {}
  dataThree: any = {}
  //courseId
  dataToBeSentToTheBackend: any  = {}
  ngOnInit(): void {
  }

  // personal detail = {} ; 
  // tabOne(){
  //   this.dataOne = Object.assign( this.dummyDataTobeSentToTheBackend, this.dataToBeSentToTheBackend)
  //   this.dummyDataTobeSentToTheBackend = {}
  // }

  // tabTwo(){
  //   this.dataTwo = Object.assign( this.dummyDataTobeSentToTheBackend, this.dataOne)
  //   this.dummyDataTobeSentToTheBackend = {}
  // }

  // tabThree(){
  //   this.dataThree = Object.assign( this.dummyDataTobeSentToTheBackend, this.dataTwo)
  //   this.dummyDataTobeSentToTheBackend = {}
  // }

  // tabFour(){
  //   this.dataFour = Object.assign( this.dummyDataTobeSentToTheBackend, this.dataThree)
  //   this.dataFour = Object.assign( { id: this.id }, this.dataFour)
  //   console.log(this.dataFour)
  //   this.dummyDataTobeSentToTheBackend = {}
  // }


/* 

  final submit
  const finalSubmitObj = {
    courseId: this.id,
    personalDetails: personalDetails,
    address: address,
    ...
  }
*/




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
          _that.dummyDataTobeSentToTheBackend.image = reader.result 
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
          _that.dummyDataTobeSentToTheBackend.imageTwo = reader.result 
        } 
        reader.readAsDataURL(file);
      } else {
        this.isExtensionError = true
      }
    }
  }

}
