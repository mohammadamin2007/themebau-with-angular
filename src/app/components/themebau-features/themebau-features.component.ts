import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {GetTransService} from "../../services/get-trans.service";

@Component({
  selector: 'app-themebau-features',
  templateUrl: './themebau-features.component.html',
  styleUrls: ['./themebau-features.component.scss']
})
export class ThemebauFeaturesComponent implements OnInit {
  featuresList = [
    {
      img: "assets/bootstrap.svg",
    },{
      img: "assets/sass.svg",
    },{
      img: "assets/figma.svg",
    },{
      img: "assets/heart.svg",
    },{
      img: "assets/support.svg",
    },{
      img: "assets/update.svg",
    }
  ]

  constructor(public translate: TranslateService, public trans: GetTransService) { }

  ngOnInit(): void {
  }

}
