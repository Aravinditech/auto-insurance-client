import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { ApiResponse } from "../models/api.response.model";


export class HttpErrorHandler {

  public static handleError(error: HttpErrorResponse) {
    console.log("handleError")
    if (error.status === 400) {
      console.log("Bad Request", error.error);
      return throwError(() => error.error as ApiResponse);
    }

    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => 'Something bad happened; please try again later.');
  }
}