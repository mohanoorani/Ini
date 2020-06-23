import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Category } from './pages/category/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  searchValue: string = "";
  categories: Category[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.addRouterHandlerForScrollTop();
  
  }

  addRouterHandlerForScrollTop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
