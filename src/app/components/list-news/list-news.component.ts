import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css'],
})
export class ListNewsComponent {
  @Input() reciveNewsList: any[] = [];

  constructor() {}
}
