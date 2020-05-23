import { Component, OnInit } from '@angular/core';
import { GreetUserService } from '../greet-user.service';
import { GreetUser } from '../greet-user';

@Component({
  selector: 'app-greet-user',
  templateUrl: './greet-user.component.html',
  styleUrls: ['./greet-user.component.css']
})
export class GreetUserComponent implements OnInit {

  message: GreetUser = {message: ''};
  error: string;
  constructor(private greetUserService: GreetUserService) { }

  ngOnInit() {
    this.greetUserService.getMessage().subscribe(
      (data: GreetUser) => {this.message = data; console.log(data)},
      error => this.error = error
    );
  }

}
