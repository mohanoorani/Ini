import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { CrudComponent } from '@app/shared/components/Crud/crud.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: 'category-list.component.html',
  styleUrls: ['category-list.component.css']
})

export class CategoryListComponent extends CrudComponent<Category> implements OnInit {

  public subject: string = "category";

  constructor(private categoryService: CategoryService, route: ActivatedRoute, router: Router) {

    super(categoryService, route, router);
  }

  ngOnInit() {
    //this.getَAll();
  }

}
