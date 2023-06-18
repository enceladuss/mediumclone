import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BackendErrorsInterface} from "../../models/backendErrors.interface";

@Component({
  standalone: true,
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
  imports: [CommonModule]
})

export class BackendErrorMessagesComponent implements OnInit {

  @Input() public backendErrors: BackendErrorsInterface | null;
  public errorMessages: (string | null)[];

  constructor() {
  }

  ngOnInit(): void {

    this.errorMessages = Object.keys(this.backendErrors as BackendErrorsInterface || {}).map((name: string) => {
      const messages = (this.backendErrors ? this.backendErrors[name] : []).join(', ');

      return `${name} ${messages}`;
    });

  }

}

