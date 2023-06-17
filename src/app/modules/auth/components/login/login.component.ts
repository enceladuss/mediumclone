import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";
import {AuthFacadeService} from "../../services/auth-facade.service";
import {RegisterRequestInterface} from "../../models/registerRequest.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public isSubmitting$: Observable<boolean> = this.authFacade.isSubmitting$;
  public validationsErrors$: Observable<BackendErrorsInterface | null> = this.authFacade.validationsErrors$;

  constructor(private formBuilder: FormBuilder, private authFacade: AuthFacadeService) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public onLogin(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.authFacade.login(request);
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    })
  }

  private initializeValues(): void {
  }

}
