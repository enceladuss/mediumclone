import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { reducers } from './store/reducers/auth.reducers';
import { AuthEffects } from './store/effects/auth.effects';
import { AuthService } from './services/auth.service';
import { BackendErrorMessagesComponent } from '../../shared/components/backend-error-messages/backend-error-messages.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    BackendErrorMessagesComponent,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
