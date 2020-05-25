import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as deconsult from '../../../../assets/js/deconsult';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("تماس با ما");
    setTimeout(function () {  deconsult.init(); }, 200);

  }
}
