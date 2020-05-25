import { Component, OnInit } from '@angular/core';
// import { GreetUserService } from '../greet-user.service';
// import { GreetUser } from '../greet-user';

import { GreetUser } from '../core/models/greet-user';
import { GreetUserService } from '../core/services/greet-user.service';

@Component({
  selector: 'app-greet-user',
  templateUrl: './greet-user.component.html',
  styleUrls: ['./greet-user.component.css']
})
export class GreetUserComponent implements OnInit {

    public colorName = 'black';
    public DisplayPermision = false;
    public TableHeader = ["mobile","createdAt","updatedAt"];
    public UserList: {};
    public inputValue = '';
    message: GreetUser = {message: ''};
    error: string;
  constructor(private greetUserService: GreetUserService) { }

  ngOnInit() {
    this.greetUserService.getMessage().subscribe(
      (data: GreetUser) => {this.message = data; console.log(data) },
      error => this.error = error
    );

    // Get all user
    this.greetUserService.GetAllUser().subscribe(data => {this.UserList = data; }),
    error =>this.error = error
  }

}
