import { Component, OnInit, Input } from '@angular/core';
import { Influencer } from '../../models/influencer';

@Component({
  selector: 'app-single-influencer',
  templateUrl: './app-single-influencer.component.html',
  styleUrls: ['./app-single-influencer.component.css']
})
export class AppSingleInfluencerComponent implements OnInit {

  @Input() influencer: Influencer;

  constructor() { }

  ngOnInit() {
  }
}