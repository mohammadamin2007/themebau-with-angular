import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {GetTransService} from "../../services/get-trans.service";

@Component({
  selector: 'app-menu-style',
  templateUrl: './menu-style.component.html',
  styleUrls: ['./menu-style.component.scss']
})
export class MenuStyleComponent implements OnInit {
  menuStyleList = [
    {
      path: "assets/classic-menu-740-362.jpg",
    },{
      path: "assets/white-left-menu-740-362.jpg",
    },{
      path: "assets/dark-center-menu-740-362.jpg",
    },{
      path: "assets/left-menu-740-362.jpg",
    }
  ]

  constructor(public translate: TranslateService, public trans: GetTransService) { }

  ngOnInit(): void {
  }

}
