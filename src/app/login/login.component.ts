import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup
  constructor(private fb:FormBuilder,private toastr:ToastrService, private authService:AuthserviceService) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }
login(){
  this.authService.login(this.loginForm.value).subscribe((res:any)=>{
   console.log(res);
   if(res.statusCode ==404    ){
     this.toastr.error('Failed!', res.message);
   }
   this.toastr.success('Success', 'Login Successful');
  },(error:any)=>{
    this.toastr.error('Failed!', error.message);
  })
  
}
}
