import {Component, OnInit} from '@angular/core';
import {AuthFacadeService} from "./modules/auth/services/auth-facade.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private authFacadeService: AuthFacadeService) {
  }

  public ngOnInit(): void {
    this.authFacadeService.getCurrentUser();
  }

}
