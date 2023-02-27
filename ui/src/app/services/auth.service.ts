import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private userService: UserService) { 
    const token = localStorage.getItem('CE_AUTH');
    this._isLoggedIn$.next(!!token);
   }

   login(username: string, password: string) {
    return this.userService.loginUser(username, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('CE_AUTH', response.token);
      })
    );
   }
}
