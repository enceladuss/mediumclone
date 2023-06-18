import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from "../models/registerRequest.interface";
import {map, Observable} from "rxjs";
import {CurrentUserInterface} from "../../../shared/models/currentUser.interface";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthResponseInterface} from "../models/authResponse.interface";
import {LoginRequestInterface} from "../models/loginRequest.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  public setUserAccessToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  public getUserAccessToken(): string {
    return localStorage.getItem('accessToken') || '';
  }

  public getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser))
  }

  private getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }
}
