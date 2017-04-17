import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from 'app/blogs/blogs/blogs.component';
import { BlogComponent } from 'app/blogs/blog/blog.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: ':post_id', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule { }
