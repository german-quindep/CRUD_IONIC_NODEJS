import { Injectable } from '@angular/core';
import { LoginServices } from 'src/app/login/services/login.service';
import { catchError } from 'rxjs/operators'
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorsService implements HttpInterceptor {

  constructor(private apiServi:LoginServices) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    const headers = new HttpHeaders({
      'x-access-token':this.apiServi.getAuthToken(),
    })
    const reqClone= req.clone({
      headers,
    });
    
    return next.handle(reqClone).pipe(
      catchError(this.mensajeError)
    );
  }

  mensajeError(error:HttpErrorResponse){
    console.log("ocurrio un error");
    console.log(error);
    return throwError('Error personalizado');
  }
}
