import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudComponent } from '@app/shared/components/Crud/crud.component';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { Title } from '@angular/platform-browser';
import * as deconsult from '../../../../../assets/js/deconsult';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent extends CrudComponent<Blog> implements OnInit {

  blogId: number;

  constructor(private blogService: BlogService, route: ActivatedRoute, router: Router,
    private titleService: Title) {

    super(blogService, route, router);
  }

  ngOnInit() {
    this.blogId = this.route.snapshot.params['id'];
    this.blogService.get(this.blogId).subscribe((res: Blog) => {
      this.item = res;
      this.titleService.setTitle(this.item.Title);
    });
    
    setTimeout(function () { deconsult.init(); }, 200);
  }
}
