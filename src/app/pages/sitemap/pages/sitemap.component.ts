import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SitemapService } from '../services/sitemap.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

  sitemap: string
  constructor(private titleService: Title, private sitemapService: SitemapService) { }

  ngOnInit() {
    this.titleService.setTitle("sitemap");

    this.sitemapService.get().subscribe(res => {
      
      this.sitemap = res;
    })
  }
}
