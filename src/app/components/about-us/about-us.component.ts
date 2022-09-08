import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {GetTransService} from "../../services/get-trans.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  aboutUsPicList = [
    {
      path: "assets/about-us-540-460.jpg",
    },{
      path: "assets/about-us-2-540-460.jpg",
    },{
      path: "assets/about-me-540-460.jpg",
    },{
      path: "assets/services-540-460.jpg",
    },{
      path: "assets/single-service-540-460.jpg",
    },{
      path: "assets/contact-us-540-460.jpg",
    },{
      path: "assets/contact-us-2-540-460.jpg",
    },{
      path: "assets/404-540-460.jpg",
    },{
      path: "assets/blog-540-460.jpg",
    },{
      path: "assets/blog-2-540-460.jpg",
    },{
      path: "assets/single-post-540-460.jpg",
    },{
      path: "assets/coming-soon-540-264.jpg",
    }
  ]

  constructor(public translate: TranslateService, public trans: GetTransService) { }

  ngOnInit(): void {
  }

}
