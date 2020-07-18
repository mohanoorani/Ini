import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css']
})

export class CategoryComponent implements OnInit {

  categoryList: Category[] = [];

  constructor(private categoryService: CategoryService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("دسته بندی ها");
    
    this.categoryService.GetAll().subscribe((result: Category[]) => {
        this.categoryList = result;
      });
  }

}
