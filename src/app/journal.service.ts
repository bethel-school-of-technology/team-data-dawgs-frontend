import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private apiUrl = 'http://localhost:3000/journals'
  
    constructor(private http: HttpClient) { }
  
    getJournals(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
  
    createJournal(data: any): Observable<any> {
      return this.http.post(this.apiUrl, data);
    }
  
    updateJournal(id: number, data: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/${id}`, data);
    }
  
    deleteJournal(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }

}
