import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  key = '2fb258e418aa42c8bebe2056114c6faf';

  constructor(private http: HttpClient) {}

  public getNews(country: string, category: string): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.key}`;

    return this.http.get(url);
  }
}
