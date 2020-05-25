import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-single-blog',
  templateUrl: './app-single-blog.component.html',
  styleUrls: ['./app-single-blog.component.css']
})
export class AppSingleBlogComponent implements OnInit {

  @Input() item: Blog ;

  constructor() { }

  ngOnInit() {
  }

}
