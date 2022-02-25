import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  change(event: any) {
    
    let _that = this;

    if (event.target.files[0]) { 
      var file = event.target.files[0]; 
      var size = event.target.files[0].size; 
      //var extension = event.target.files[0].type.replace(/(.*)\//g, ''); 
      var reader: any = new FileReader(); 
      reader.onloadend = function () { 
        console.log('RESULT', reader.result) 
        _that.userModel.image = reader.result 
      } 
      reader.readAsDataURL(file); }
  }

  register() {
    this.authService.register(this.userModel).subscribe((res: any) => {
      if (res.status === 200) {
        console.log(this.userModel.roleId)
        console.log(res.data)
        alert(res.data)
        this.userModel = {}
      } else {
        alert(res.data)
      }
    })
  }

}


//can i use if else in html 
//file upload