import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userList: any = [];
  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (res) => {
        console.log(res);
        this.userList = res;
      },
      (error) => {
        console.log(error);
        this.toastrService.error('Failed!', error.error.message);
      }
    );
  }
}
