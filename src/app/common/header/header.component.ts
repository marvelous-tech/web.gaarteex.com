import {Component, OnInit} from '@angular/core';
import {COMPANY_DATA} from "../../../data/company";
import {ROUTES} from "../../app-routing.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  COMPANY = COMPANY_DATA;
  routes = ROUTES.filter((value) => {
    return value.enabled == true;
  });

  constructor() { }

  ngOnInit(): void { }

}
