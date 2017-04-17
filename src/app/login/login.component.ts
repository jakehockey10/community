import { Component, OnInit, Query } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from 'app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  return = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Query) => {
        this.return = params['return'] || '/forums';
        if (!this.userService.isGuest()) {
          this.go();
        }
      });
  }

  login() {
    if (this.username && this.password) {
      this.userService.login(this.username);
      this.go();
    }
  }

  private go() {
    this.router.navigateByUrl(this.return);
  }

}
