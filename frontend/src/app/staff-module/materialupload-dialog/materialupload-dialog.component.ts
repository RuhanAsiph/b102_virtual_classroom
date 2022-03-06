import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-materialupload-dialog',
  templateUrl: './materialupload-dialog.component.html',
  styleUrls: ['./materialupload-dialog.component.scss']
})
export class MaterialuploadDialogComponent implements OnInit {

  materialModel: any = {
    _id: this.data._id,
    courseId: this.data.courseId,
    lecture: this.data.lecture,
    description: this.data.description,
    courseCode: this.data.courseCode,
    contentMaterial: []
  }
  id:any;
  constructor(private authService:AuthService, private router:Router, private activatedRoute:ActivatedRoute, public dialogRef:MatDialogRef<MaterialuploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
    // this.id = this.activatedRoute.snapshot.queryParamMap.get("id")
  }
  contentMaterial:any = []
  materialName:String = ""
  materialInstructor = ""
  showMaterialUploaded: boolean = false
  isExtensionError: boolean = false;
  isSizeError: boolean = false;
  fetchDocs = []
  showDocs:boolean = false
  ngOnInit(): void {
    this.fetchDoc()
  }

  sendPdfLogic(){ 

    this.authService.sendMaterial(this.materialModel).subscribe((res:any) => {
      if (res.status === 200) {
        alert(res.data)
        this.materialModel = {}
      } else {
        alert(res.data)
      }
    })
    this.dialogRef.close()
  }
  closeDialog(){
    this.dialogRef.close()
  }

  uploadPdf(event:any) {
    let _that = this;
    this.isExtensionError = false
    this.isSizeError = false

    if (event.target.files[0]) {
      var file = event.target.files[0];
      var name = event.target.files[0].name;
      var size = event.target.files[0].size;
      var extension = event.target.files[0].type.replace(/(.*)\//g, '');
      var sizeInMb = Math.round(size/1024);
      if (sizeInMb >= 3024) {
        this.isSizeError = true
      } else if (extension === "pdf") {
        var reader: any = new FileReader();
        reader.onloadend = function (){
          _that.materialModel.contentMaterial[0] = reader.result
          _that.showMaterialUploaded = true
          _that.materialName = name
        }
        reader.readAsDataURL(file);
      } else {
        this.isExtensionError = true
      }
    }
  }

  remove(){
    this.showMaterialUploaded = false
    this.materialModel.contentMaterial = []
    this.showDocs = false
  }

  fetchDoc(){
    
    this.authService.fetchDoc(this.data._id).subscribe((res:any) => {
      if (res.status === 200) {
        this.fetchDocs = res.data
        this.showDocs = true
      }
    })
  }

  removePdf(id: any) {
    this.authService.deleteDoc(this.data, id).subscribe((res: any) => {
      if (res.status === 200) {
        this.fetchDocs = res.data
        alert(res.data)
        this.showDocs = false
      } else {
        alert(res.data)
      }
    })
  }
}
