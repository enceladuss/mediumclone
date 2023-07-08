import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class BannerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
