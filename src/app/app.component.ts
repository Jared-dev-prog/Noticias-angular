import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newsList: any[] = [];
  loading: boolean = false;

  constructor(private _newsService: NewsService) {}

  public searchNews(params: any): void {
    const { category, country } = params;
    this.loading = true;
    this.newsList = [];

    setTimeout(() => {
      this._newsService.getNews(country, category).subscribe({
        next: (data) => {
          this.newsList = data.articles;
          this.loading = false;
          console.log(data.articles);
        },
        error: (e) => {
          console.log(e);
          this.loading = false;
        },
      });
    }, 2000);
  }
}
