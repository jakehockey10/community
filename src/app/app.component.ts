import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { ChatBotService } from 'app/chat-bot.service';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ChatBotService,
    UserService
  ]
})
export class AppComponent {
  loggedIn = false;

  constructor(
    private userService: UserService,
    private location: Location
  ) { }

  back() {
    this.location.back();
  }

  logout() {
    this.userService.logout();
  }

}
