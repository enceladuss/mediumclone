import { Injectable } from '@angular/core';
import {RegisterRequestInterface} from "../models/registerRequest.interface";
import {Observable, map} from "rxjs";
import {CurrentUserInterface} from "../../../shared/models/currentUser.interface";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthResponseInterface} from "../models/authResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }
}
