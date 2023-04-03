import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PegawaiService {

  constructor(
    private http: HttpClient
  ) { }

  getData(params: {pageNumber: number, pageSize: number}):Observable<any>{
    const url = `http://localhost:3000/api/pegawai?pageNumber=${params.pageNumber}&pageSize=${params.pageSize}`;
    return this.http.get(url);
  }
}