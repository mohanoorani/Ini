import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BreadCrumb } from "@app/core/models";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Component({
  selector: "app-bread-crumb",
  templateUrl: "./bread-crumb.component.html",
  encapsulation: ViewEncapsulation.None
})
export class BreadCrumbComponent implements OnInit {

  breadcrumbs$: Observable<BreadCrumb[]>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.breadcrumbs$ = this.router.events.pipe(
      
      map(event => event ? this.buildBreadCrumbs(this.activatedRoute.root) : []));
  }

  buildBreadCrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    const routeDataBreadCrumbKey = "title";
    const routeConfig = route.routeConfig;
    const path = routeConfig && routeConfig.path !== undefined ? routeConfig.path : "";

    let label = path;
    if (url === "") {
      label = "خانه";
    } else if (routeConfig && routeConfig.data !== undefined) {
      label = routeConfig.data[routeDataBreadCrumbKey];
    }

    const nextUrl = `${url}${path}/`;
    const breadcrumb: BreadCrumb = {
      label: label,
      url: nextUrl
    };
    console.log("breadcrumb", { path: path, label: label, url: nextUrl, route: route });
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}