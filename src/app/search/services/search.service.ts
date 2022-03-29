import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl: string = 'https://api.github.com';

  constructor(
    private http: HttpClient,
  ) { }

  getIssues(query: string): Observable<any>{
    const url = `${this.baseUrl}/search/issues?q=${query} type:issue in:title in:body user:${query} org:${query}`;
    return this.http.get<any>(url)
  }
}

