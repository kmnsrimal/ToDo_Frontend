import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:any;

  baseUrl = 'http://localhost:4200/';

  constructor(private _http: HttpClient) { }

  getTypeRequest(url:any) {
    return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
    return res;
    }));
    }
    postTypeRequest(url:any, payload:any) {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
    return res;
    }));
    }
    putTypeRequest(url:any, payload:any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
    return res;
    }));
    }
}
