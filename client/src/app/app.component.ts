import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'tip-root',
  templateUrl: './app.component.html',
  // template: 'Hello {{title}}!',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cats: any[];
  title = 'app';

  constructor(
    @Inject('Backend') private api: {host, port},
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get(`http://${this.api.host}:${this.api.port}/cats`)
      .subscribe((cats: any[]) => this.cats = cats);
  }
}
