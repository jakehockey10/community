import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  Params
} from '@angular/router';

import { ChatBotService } from 'app/chat-bot.service';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  user: string;
  guest: string;
  messages: any[];
  message = '';
  @ViewChild('scrollBox') private scrollBox: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chatBotService: ChatBotService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.messages = [];
      this.user = this.userService.getUser();
      this.guest = params['username'];
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  close() {
    this.router.navigate([{ outlets: { chat: null } }]);
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

  send() {
    this.addMessage(this.user, this.message, 'left');
    this.reply();
    this.message = '';
  }

  private addMessage(author, message, type) {
    this.messages.push({
      author: author,
      message: message,
      type: type
    });
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollBox.nativeElement.scrollTop = this.scrollBox.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }

  private reply() {
    setTimeout(
      () => this.addMessage(this.guest, this.chatBotService.respond(), 'right'),
      2500);
  }

}
