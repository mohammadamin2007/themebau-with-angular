import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  descriptionLayoutsList = [
    {
      color: "red",
      path: "assets/layout-1.svg"
    },{
      color: "white",
      path: "assets/layout-2.svg"
    },{
      color: "yellow",
      path: "assets/layout-3.svg"
    },{
      color: "purple",
      path: "assets/layout-4.svg"
    },{
      color: "green",
      path: "assets/layout-5.svg"
    },{
      color: "blue",
      path: "assets/layout-6.svg"
    }
  ]
  constructor(public translate: TranslateService) {

  }

  ngOnInit(): void {
  }

}
