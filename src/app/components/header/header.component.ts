import { Component, OnInit } from '@angular/core';
import { ScrollService } from "../../services/scroll.service";
import { TranslateService } from "@ngx-translate/core";
import {GetTransService} from "../../services/get-trans.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerImgList = [
    {
      path: "assets/main-home-740-600.jpg",
    },{
      path: "assets/simple-portfolio-740-600.jpg",
    },{
      path: "assets/creative-agency-740-600.jpg",
    },{
      path: "assets/freelancer-portfolio-740-600.jpg",
    },{
      path: "assets/interactive-dark-740-600.jpg",
    },{
      path: "assets/digital-agency-740-600.jpg",
    },{
      path: "assets/fullscreen-slider-740-362.jpg",
    },{
      path: "assets/carousel-light-740-362.jpg",
    },{
      path: "assets/carousel-dark-740-362.jpg",
    },{
      path: "assets/interactive-light-740-600.jpg",
    },{
      path: "assets/left-menu-740-600.jpg",
    }
  ]

  constructor(public scrollService: ScrollService, public translate: TranslateService, public trans: GetTransService) {
  }

  ngOnInit(): void {
  }

}
