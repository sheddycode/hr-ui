import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { SessionService } from '../service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading!: boolean;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.sessionService.logout();
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.isLoading = false;
        if (res.code == 200) {
          this.toastr.success('Success!', res.message);
this.router.navigate(['/app/dashboard'])
          this.sessionService.setUser(res.data.userDetails);
          this.sessionService.setToken(res.data.token);
        }
        else{
          this.toastr.error('Failed!', res.message);
        }
      },
      (error: any) => {
        this.isLoading = false;
        this.toastr.error('Failed!', error.message);
      }
    );
  }
}
