import { AuthComponent } from './auth.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthComponent, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(state.url);
        return new Promise((res, rej) => {
          if (this.auth.isLoggedIn){
            return res();
          } else { 
            return rej()
          }
        }).then(() => true).catch(() => false)
  } 
}
