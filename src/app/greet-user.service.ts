import { Injectable } from '@angular/core';
import { GreetUser } from './greet-user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GreetUserService {

  private serverUrl = 'http://localhost:3000/api/message';  // URL to web api

  constructor( private http: HttpClient) { }

  getMessage() {
    return this.http.get<GreetUser>(this.serverUrl).pipe(catchError(this.handleError));
  }

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error is occoured', error.error.message);
  } else {
    console.error(`Backend return code ${error.status}`);
  }
  return throwError('Something happened bad,Try again later');
}

}

