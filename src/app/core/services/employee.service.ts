import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private serverUrl = 'http://localhost:3000';  // URL to web api

  constructor(private http: HttpClient) { }

  // http://localhost:3000/api/users
  GetAllUser() {
    return this.http.get(this.serverUrl + '/api/users').pipe(catchError(this.handleError));
  }

  // Handle Error
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error is occoured', error.error.message);
    } else {
      console.error(`Backend return code ${error.status}`);
    }
    return throwError('Something happened bad,Try again later');
  }

}
