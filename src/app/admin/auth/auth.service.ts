import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth: boolean = false;
  constructor() {}

  public login(name: string, pass: string): boolean {
    this.isAuth = name === 'admin' && pass === '123';

    return this.isAuth;
  }

  public logout(): void {
    this.isAuth = false;
  }
}
