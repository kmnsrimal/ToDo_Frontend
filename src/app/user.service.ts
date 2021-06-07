import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { ToDo } from './model/todo.js';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  REST_API: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // default() {
  //   console.log("service");
  //   return this.http.get('http://localhost:3000' + '/get-all');
  // }

    // Http Header
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    default() {
      return this.http.get('http://localhost:3000' + '/getall');
    }

    category() {
      return this.http.get('http://localhost:3000' + '/getcategory');
    }

    // CreateToDo()
    // {
    //   return this.http.post('http://localhost:3000' +'/create',$this.bookForm.value);
    // }

    CreateToDo(data:any): Observable<any> {
      console.log(data);
      let API_URL = 'http://localhost:3000' +'/create';
      return this.http.post(API_URL, data)
        // .pipe(
        //   catchError(this.handleError)
        // )
    }

    deleteEmployee(id:any): Observable<any> {
      console.log("delete");
      console.log(id);
      // const i = this.listEmployees.findIndex(e => e.id === id);
      // if (i !== -1) {
        // this.listEmployees.splice(i, 1);
        let API_URL = `${this.REST_API}/delete/${id}`;
      return this.http.delete(API_URL,{ headers: this.httpHeaders}).pipe(
        // catchError(this.handleError)
      )
      }

      // complete(data:any): Observable<any> {
      //   let API_URL = 'http://localhost:3000' +'/complete/id';
      //   return this.http.post(API_URL, data)
      //     // .pipe(
      //     //   catchError(this.handleError)
      //     // )
      // }

      complete(data:any): Observable<any> {
        let API_URL = `${this.REST_API}/update/${data.id}`;
        console.log(data.id);
        return this.http.post(API_URL,data)
        //  .pipe(
        //     //  catchError(this.handleError)
        //  )
      }

      UpdateDate(data:any,date:any): Observable<any> {
        console.log(data);
        console.log(date.date);
        let API_URL = `${this.REST_API}/Dateupdate/${data.id}/${date.date}`;
        console.log(data);
        return this.http.post(API_URL,data,date)
        //  .pipe(
        //     //  catchError(this.handleError)
        //  )
      }
}
