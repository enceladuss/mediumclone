import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers/auth.reducers";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/effects/auth.effects";
import {AuthService} from "./services/auth.service";


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthService]
})
export class AuthModule {
}
