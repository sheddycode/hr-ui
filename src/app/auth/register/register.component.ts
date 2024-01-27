import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: any = FormGroup;
  isLoading!:boolean
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
 this.isLoading=true
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.toastr.error('Validation Error', 'Please enter the required fields');
      this.isLoading=false
      return;
    }
    // connecting to server
    this.authService.registerEmployee(this.registerForm.value).subscribe(
      (res: any) => {
        this.isLoading=false
        if ((res['code'] === 200)) {
          this.toastr.success('Success', res.message);
          this.registerForm.reset()
        } else if ((res['code'] === 400)) {
          this.toastr.warning('Failed!', res.message);
        } else {
          this.toastr.error('Failed!', res.message);
        }
      },
      (error: any) => {
        this.isLoading=false
        this.toastr.error('Failed!', error.message);
      }
    );
  }
}
