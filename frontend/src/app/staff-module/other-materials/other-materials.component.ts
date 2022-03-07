import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-other-materials',
  templateUrl: './other-materials.component.html',
  styleUrls: ['./other-materials.component.scss']
})
export class OtherMaterialsComponent implements OnInit {

  materialModel: any = {
    _id: this.data._id,
    additionalMaterial: {
       // fileName: String,
      // file: String,
      // instructor: String
    }
     
  }

  isSizeError:boolean = false;
  isExtensionError: boolean = false;
  constructor(private authService: AuthService, public dialog: MatDialog, public dialogRef:MatDialogRef<OtherMaterialsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  uploadPdfs(event:any){
    let _that = this;
    this.isExtensionError = false
    this.isSizeError = false

    if (event.target.files[0]) {
      var file = event.target.files[0];
      var name = event.target.files[0].name;
      var size = event.target.files[0].size;
      var extension = event.target.files[0].type.replace(/(.*)\//g, '');
      var sizeInMb = Math.round(size/1024);
      if (sizeInMb > 3024) {
        
        this.isSizeError = true
      } else if (extension === "pdf") {
        var reader: any = new FileReader();
        reader.onloadend = function (){
          _that.materialModel.additionalMaterial.file = reader.result
        }
        reader.readAsDataURL(file);
      } else {
        this.isExtensionError = true
      }
    }
  }

  closeDialog() {
    this.dialogRef.close()
  }

  sendPdf(){
    this.authService.sendMaterials(this.materialModel).subscribe((res:any) => {
      if (res.status === 200) {
        alert(res.data)
        this.materialModel = {}
      } else {
        alert(res.data)
      }
    })
    this.dialogRef.close()
  }
}
