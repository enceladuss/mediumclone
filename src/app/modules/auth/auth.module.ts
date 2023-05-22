import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers/auth.reducers";



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers)
  ]
})
export class AuthModule { }
