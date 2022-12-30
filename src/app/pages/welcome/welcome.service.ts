import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('assets/my_data.json');
  }
}
