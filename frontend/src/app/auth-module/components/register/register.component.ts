import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  
  @ViewChild('registerForm', {static: false}) public signUpForm!: NgForm;
  
  image: any = "../../../../assets/img.jpg";
  userModel: any = {}
  roles: any = [{
    roleId: 1,
    role: "Staff"
  },
  {
    roleId: 2,
    role: "Student"
  }
  ]
  isExtensionError: boolean = false;
  isSizeError: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  change(event: any) {
    // debugger
    let _that = this;
    this.isExtensionError = false
    this.isSizeError = false

    if (event.target.files[0]) { 
      var file = event.target.files[0]; 
      var size = event.target.files[0].size; 
      var extension = event.target.files[0].type.replace(/(.*)\//g, ''); 
      console.log(size)
      console.log(extension)
      var sizeInMb = Math.round(size/1024);
      console.log(sizeInMb)
      if (sizeInMb >= 1024 ) {
        this.isSizeError = true
      } else if (extension === "jpg" || extension === "png") {
        var reader: any = new FileReader(); 
        reader.onloadend = function () { 
          console.log('RESULT', reader.result) 
          _that.userModel.image = reader.result 
        } 
        reader.readAsDataURL(file);
      } else {
        this.isExtensionError = true
      }
      }
  }

 

 
  register() {
    if (this.signUpForm.valid){
      this.authService.register(this.userModel).subscribe((res: any) => {
        if (res.status === 200) {
          console.log(this.userModel.roleId)
          console.log(res.data)
          alert(res.data)
          this.userModel = {}
          this.signUpForm.reset()
        } else {
          alert(res.data)
        }
      })
    }
    
 }

}


//can i use if else in html 
