import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-edit-materials',
  templateUrl: './edit-materials.component.html',
  styleUrls: ['./edit-materials.component.scss']
})
export class EditMaterialsComponent implements OnInit {

  constructor(private authService: AuthService, public dialog: MatDialog, public dialogRef:MatDialogRef<EditMaterialsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    
  }


  deleteMaterial(n: any) {
    this.authService.deleteMaterial(n, this.data).subscribe((res:any) => {
      if (res.status === 200) {
        alert(res.data)
      } else {
        alert(res.data)
      }
    })
  }
}
