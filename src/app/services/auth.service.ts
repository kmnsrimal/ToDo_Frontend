import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // localStorage:any;

  constructor() { }

  getUserDetails() {
    // return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;

    }
    setDataInLocalStorage(variableName:any, data:any) {
    localStorage.setItem(variableName, data);
    }
    getToken() {
    return localStorage.getItem('token');
    }
    clearStorage() {
    localStorage.clear();
    }
}
