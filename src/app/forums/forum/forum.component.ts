import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Forum } from 'app/forums/data';

import { ForumsService } from 'app/forums/forums.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forum: Forum;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forumsService: ForumsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.forum = this.forumsService.forum(params['forum_alias']);
      if (!this.forum) {
        this.router.navigate(['/not-found']);
      }
    });
  }

}
