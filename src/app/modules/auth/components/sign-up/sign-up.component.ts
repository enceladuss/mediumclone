import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {RegisterRequestInterface} from "../../models/registerRequest.interface";
import {AuthFacadeService} from "../../services/auth-facade.service";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";

@Component({
  selector: 'app-register',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public form!: FormGroup;
  public isSubmitting$: Observable<boolean> = this.authFacade.isSubmitting$;
  public validationsErrors$: Observable<BackendErrorsInterface | null> = this.authFacade.validationsErrors$;

  constructor(private formBuilder: FormBuilder, private authFacade: AuthFacadeService) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public onSignUp(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.authFacade.register(request);
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    })
  }

  private initializeValues(): void {
  }

}
