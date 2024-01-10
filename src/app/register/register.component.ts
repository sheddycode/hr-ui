import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from 'express';
import { AuthserviceService } from '../service/authservice.service'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any = FormGroup;
  constructor(private formBuilder: FormBuilder, private AuthserviceService: AuthserviceService) {

  }



  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  register() {
    console.log(this.registerForm.value);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert("Invalid Fields");
      return;
    }
    // connecting to server
    this.AuthserviceService.registerEmployee(this.registerForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.response == "Success") {
        alert("Employee Registration Successful!")
      } else {
        alert("Employee Registration Failed!")
      }
    })

   

  }



}
