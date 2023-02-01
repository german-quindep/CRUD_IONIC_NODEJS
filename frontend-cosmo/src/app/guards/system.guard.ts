import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { LoginServices } from '../login/services/login.service';
import {urlFrontend} from '../shared/routes/RoutesFrontend';
@Injectable({
  providedIn: 'root'
})
export class SystemGuard implements CanActivate {
  constructor(private api:LoginServices,private route:Router){}
  canActivate(): boolean {
      if(this.api.getAuthToken().length<0){
        this.route.navigateByUrl(`${urlFrontend.login.module}/${urlFrontend.login.login}`);
        return false;
      }
      return true;
  }
  
}
