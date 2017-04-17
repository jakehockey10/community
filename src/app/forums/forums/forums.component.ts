import { Component, OnInit } from '@angular/core';

import { Forum } from 'app/forums/data';

import { ForumsService } from 'app/forums/forums.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  forums: Forum[];

  constructor(private forumsService: ForumsService) { }

  ngOnInit() {
    this.forums = this.forumsService.forums;
  }

}
