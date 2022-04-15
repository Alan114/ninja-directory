import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http.get('/assets/ninjas.json');

    // return this.http.get<{ name: string; belt: string }[]>('/assets/ninjas.json');
  }
}
