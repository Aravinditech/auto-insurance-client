import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { ApiResponse } from '../models/api.response.model';
import { HttpErrorHandler } from '../handler/httpErrorHandler';
import { ClaimData } from '../models/claim';


@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  public baseUrl = 'https://localhost:44369/';

  constructor(
    private http: HttpClient
  ) { }

 


  CreateClaim(request: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "api/Claims", request)
      .pipe(
        tap(this.handleError),
        catchError(HttpErrorHandler.handleError)
      );
  }

  updateStatus(id:number, status:string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "api/Claims/updateStatus?id="+id+"&status="+status, {})
      .pipe(
        tap(this.handleError),
        catchError(HttpErrorHandler.handleError)
      );
  }

  addDoc(request: FormData): Observable<ApiResponse> {
    console.log(request);
    const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'multipart/form-data')
};
    return this.http.post<ApiResponse>(this.baseUrl + "api/Claims/addDocument", request)
      .pipe(
        tap(this.handleError),
        catchError(HttpErrorHandler.handleError)
      );
  }

  handleError(res: ApiResponse) {
    if (res.statusCode == 400) {
      var errorMsg: any = Object.values(res.errors)[0];
      console.log('errorMsg', errorMsg[0]);
      // this.toast.Error(errorMsg[0]);
      return;
    }



  

  }




getClaim() {
  return this.http.get(this.baseUrl + "api/Claims" )
    .pipe(catchError(HttpErrorHandler.handleError));
}

}
