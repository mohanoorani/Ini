import { Component, OnInit } from '@angular/core';
import { CrudComponent } from '@app/shared/components/Crud/crud.component';

import { Category } from '../../models';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '@app/core/models/message.enum';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends CrudComponent<Category> implements OnInit {

  selectedFile: File;
  
  
  constructor(private categoryService: CategoryService, route: ActivatedRoute, router: Router) {

    super(categoryService, route, router);
  }

  ngOnInit() {
    this.item = new Category();
    //this.getItemFromRouteParam();

  }

}
