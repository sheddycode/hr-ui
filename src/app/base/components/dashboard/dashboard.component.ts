import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/auth/service/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  loggedInUser: any;
  constructor(private sessionService: SessionService, private router:Router) {
    this.loggedInUser = this.sessionService.getUser();
  }

  ngOnInit(): void {}

  logOut(){
    this.sessionService.logout();
      this.router.navigate(['/login'])
  }
}
