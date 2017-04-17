import { Component, OnInit } from '@angular/core';

import { Post } from 'app/blogs/data';

import { BlogsService } from 'app/blogs/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  posts: Post[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.posts = this.blogsService.posts;
  }

}
