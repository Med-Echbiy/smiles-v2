import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RedirectService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        `http://localhost:1337/api/connect/github/callback${window.location.search}`
      )
      .subscribe((res) => console.log(res));
  }
}
