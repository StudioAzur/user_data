import { UserService } from './../../service/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  private users: any;


  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser = () => {
    console.log(this.service.data);
  };
}
