import { Component, OnInit } from '@angular/core';

import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { CrudComponent } from '@app/shared/components/Crud/crud.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as deconsult from '../../../../../assets/js/deconsult';

@Component({
  selector: 'app-blog',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['blog-list.component.css']
})

export class BlogListComponent extends CrudComponent<Blog> implements OnInit {

  blogList: Blog[] = [];

  constructor(private blogService: BlogService, route: ActivatedRoute, router: Router,
    private titleService: Title) {

    super(blogService, route, router);

    this.items = new Array<Blog>();
  }

  ngOnInit() {

    this.blogService.getAll().subscribe((result: Blog[]) => {
      this.blogList = result;


      this.titleService.setTitle("وبلاگ گالری شمس");

      setTimeout(function () { deconsult.init(); }, 200);
    });
  }

}
