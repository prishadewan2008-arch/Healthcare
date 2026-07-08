import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(private http: HttpClient) {}

  ask(question: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/chat', {
      question: question
    });
  }

}