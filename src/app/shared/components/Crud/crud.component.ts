import { Component, OnInit } from '@angular/core';
import { HttpService, AlertifyService } from '../../services';
import { Message } from '@app/core/models/message.enum';
import { Pagination } from '@app/core/models/pagination';
import { Pair } from '@app/core/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud',
  template: `
    <p>
      crud works!
    </p>
  `
})
export class CrudComponent<T> {

  public items: T[] = [];
  public item: T;
  public pagination = new Pagination(1, 1000);
  public dictionary: Array<Pair>;
  public Id: number;
  public Name: string;
  public alertify: AlertifyService;

  constructor(public httpService: HttpService<T>, public route: ActivatedRoute, public router: Router) {

    this.alertify = new AlertifyService();

  }

  getَAll() {
    this.httpService.GetAllForGrid(this.pagination).subscribe(res => {

      this.items = res.result;
      this.pagination = res.pagination;
    })
  }

  get(id: number) {
    this.httpService.get(id).subscribe(res => {
      this.item = res;
    })
  }

  edit(id: number, item: T) {
    this.httpService.update(id, item).subscribe(
      () => {

        this.goToList()

      }
    );
  }

  remove(id: number) {

    this.httpService.delete(id).subscribe(
      () => {
        this.getَAll();
        this.alertify.success(Message.deleteSuccess);
      },
      err => {
        this.alertify.error(err);
        this.getَAll();

      }
    );
  }

  add(item: T) {
   
    if (this.Id && this.Id > 0) {
      this.edit(this.Id, item);
    }
    else {
      this.httpService.add(this.item).subscribe(src => {

        this.goToList()

      })
    }
  }

  goToList() {
    this.alertify.success(Message.saveSuccess);
    this.router.navigate([this.httpService.endpoint]);

    if(!this.router.url.includes('Edit'))
    this.getَAll();
  }

  goToEdit(id: number) {

    this.router.navigate([this.httpService.endpoint + '/Edit/' + id]);
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event;
    this.getَAll();
  }

  sort(event: Pagination) {
    let sort = event;
    this.getَAll();
  }

  getQueryString() {
    this.route.params.subscribe(params => {
      if (params) {
        this.Id = +params['id'];
        this.Name = params['name'];
        if (this.Id > 0) {
          this.get(this.Id);

        }
      }
    });
  }

  getItemFromRouteParam () {
    this.Id = this.route.snapshot.params['id'];
    if (this.Id > 0) {
      this.get(this.Id);
    }
  }
}
