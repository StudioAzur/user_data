import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  public users: any;
  

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    console.log(this.users);
    
  }

  ngOnDestroy(): void {}

  getUsers = () => {
    this.users = this.service.data;
  };
}
