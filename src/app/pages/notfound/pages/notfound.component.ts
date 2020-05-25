import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as deconsult from '../../../../assets/js/deconsult';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("یافت نشد");
    setTimeout(function () {  deconsult.init(); }, 200);

  }
}
