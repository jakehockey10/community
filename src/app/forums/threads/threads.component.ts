import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Thread } from 'app/forums/data';

import { ForumsService } from 'app/forums/forums.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads: Thread[];

  constructor(
    private route: ActivatedRoute,
    private forumsService: ForumsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.threads = this.forumsService.threads(params['forum_alias']);
    });
  }

}
