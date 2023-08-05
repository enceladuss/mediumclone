import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Observable} from "rxjs";
import {AuthFacadeService} from "../../../modules/auth/services/auth-facade.service";
import {CurrentUserInterface} from "../../models/currentUser.interface";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class TopBarComponent implements OnInit {

  public isLoggedIn$: Observable<boolean | null> = this.authFacadeService.isLoggedIn$;
  public currentUser$: Observable<CurrentUserInterface | null> = this.authFacadeService.currentUser$;

  constructor(
    private authFacadeService: AuthFacadeService
  ) { }

  ngOnInit(): void {
  }

}
