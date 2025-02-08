import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerseService {

  private apiUrl = 'http://localhost:${PORT}'

  constructor(private http: HttpClient) { }

  getVerses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createVerse(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  deleteVerse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
