import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable()
export class HttpService<T> {

  public baseUrl = environment.baseUrl;
  public endpoint: string = "";
  public url:string= "";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Array<T>> {

    return this.http.get<Array<T>>(this.url);
  }

  get(id): Observable<T> {
    return this.http.get<T>(this.url + id);
  }

  add(T): Observable<T> {
    
    return this.http.post<T>(this.url, JSON.stringify(T), this.httpOptions).pipe(
      catchError(this.handleError<any>('add'))
    );
  }

  update(id, T): Observable<T> {
    return this.http.put(this.url + id, JSON.stringify(T), this.httpOptions).pipe(
      catchError(this.handleError<any>('updateCar'))
    );
  }

  delete(id): Observable<T> {
    return this.http.delete<any>(this.url + id, this.httpOptions).pipe(
      catchError(this.handleError<any>('deleteCar'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}