import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styles: [`
    .article {
      border-bottom: 1px solid #ccc;
      margin-bottom: 8px
    }
    .article .title {
      font-size: 125%;
    }
    .article .author {
      color: #5CB85C;
    }
    .article .date {
      color: #aaa;
    }
  `]
})
export class HttpRequestsComponent implements OnInit {
  API_ROOT = 'https://conduit.productionready.io/api';
  ARTICLES = this.API_ROOT + '/articles';
  loading: boolean;
  error: boolean;
  articles: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loading = true;
    this.http.get(this.ARTICLES, { params: { limit: '10' } }).subscribe((data: any) => {
      this.articles = data.articles;
      this.loading = false;
    }, () => {
      this.error = true;
      this.loading = false;
      this.articles = [];
    });
  }
}
