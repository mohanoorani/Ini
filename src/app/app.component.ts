import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Category } from './pages/category/models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  searchValue: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.addRouterHandlerForScrollTop();
    this.registerTooltips();
  }

  registerTooltips() {
    setInterval(() => {$('[data-toggle="tooltip"]').tooltip();}, 1000);
  }

  addRouterHandlerForScrollTop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  
  search() {
    this.router.navigate(['influencers/search/' + this.searchValue]);
  }
}
