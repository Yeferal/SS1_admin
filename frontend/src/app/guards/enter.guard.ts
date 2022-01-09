import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/user/auth.service';
import { SessionService } from '../services/user/session.service';

@Injectable({
  providedIn: 'root'
})
export class EnterGuard implements CanActivate {
  
  
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    this.auth.isAuthenticated().subscribe(
      res => {
        console.log(res);
        if (res) {
          this.router.navigate(['home']);
          return false;
        }
        return true;
      },
      err => {
        console.log(err);
        return false;
      }
    );
    return true;
  }
  
}
