import { Component, OnInit } from '@angular/core';
import { Auth } from '../../models/authModel';

//fix
import { AuthService } from '/home/abdullah/workspace/b102_lelafe_fullstack_virtual_classroom/frontend/src/app/auth-module/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showFiller = false;
  authModel:Auth = {
    email:"", 
    password:"",
    roleId:"",
   
  }
  roles:any = [{
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

  login() {
    this.authService.login(this.authModel).subscribe((res:any) => {
      if (res.status === 200) {
        console.log(this.authModel.roleId)
        this.authModel = {}
        alert(res.data)
        
      } else {
        this.authModel = {}
        alert(res.data)
      }
    })
  }

}
