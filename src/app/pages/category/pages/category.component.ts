import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css']
})

export class CategoryComponent implements OnInit {

  categoryList: Category[] = [];

  constructor(private categoryService: CategoryService, route: ActivatedRoute, router: Router) {
  }

  ngOnInit() {
    this.categoryService.GetAll().subscribe((result: Category[]) => {
        this.categoryList = result;
      });
  }

}
