import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counto = null;
  count_2 = null;

  constructor() { }

  ngOnInit(): void {
  }

}
