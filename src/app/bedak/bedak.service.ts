import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BedakService {

  constructor(
    private http: HttpClient
  ) { }

  getData():Observable<any>{
    const url = 'http://localhost:3000/api/bedak';
    return this.http.get(url);
  }
}