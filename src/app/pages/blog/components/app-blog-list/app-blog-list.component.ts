import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './app-blog-list.component.html',
  styleUrls: ['./app-blog-list.component.css']
})
export class AppBlogListComponent implements OnInit {

  @Input() blogList: Blog[] = []

  constructor() { }

  ngOnInit() {
  }

}
