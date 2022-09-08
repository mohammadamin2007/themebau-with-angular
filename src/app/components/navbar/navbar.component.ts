import { Component, OnInit } from '@angular/core';
import { ScrollService } from "../../services/scroll.service";
import {TranslateService} from "@ngx-translate/core";
import {GetTransService} from "../../services/get-trans.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarItems = [
    {
      white: true,
    },
    {
      white: true,
    },
    {
      white: true,
    },
    {
      white: true,
    }
  ]
  bigDropDownList = [
    {
      text: "main home",
      src: "assets/main-home.jpg"
    },{
      text: "simple portfolio",
      src: "assets/simple-portfolio.jpg"
    },{
      text: "creative agency",
      src: "assets/creative-agency.jpg"
    },{
      text: "freelancer portfolio",
      src: "assets/freelancer-portfolio.jpg"
    },{
      text: "interactive dark",
      src: "assets/interactive-dark.jpg"
    },{
      text: "interactive light",
      src: "assets/interactive-light.jpg"
    },{
      text: "left menu",
      src: "assets/left-menu.jpg"
    },{
      text: "digital agency",
      src: "assets/digital-agency.jpg"
    },
  ]
  normalDropdownList = [
    [
      {
        text: "1 column",
        linkHovered: false,
        isDropdown: true,
        dropdown: [
          {
            text: "style 1"
          },
          {
            text: "style 2"
          }
        ]
      },
      {
        text: "2 column",
        linkHovered: false,
        isDropdown: true,
        dropdown: [
          {
            text: "style 1"
          },{
            text: "style 2"
          },{
            text: "style 3"
          },{
            text: "style 4"
          },{
            text: "style 5"
          },{
            text: "style 6"
          }
        ]
      },
      {
        text: "3 column",
        linkHovered: false,
        isDropdown: true,
        dropdown: [
          {
            text: "style 1"
          }, {
            text: "style 2"
          },{
            text: "style 3"
          },{
            text: "style 4"
          },{
            text: "style 5"
          }
        ]
      },
      {
        text: "4 column",
        linkHovered: false,
        isDropdown: true,
        dropdown: [
          {
            text: "style 1"
          }, {
            text: "style 2"
          },{
            text: "style 3"
          },{
            text: "style 4"
          }
        ]
      },
      {
        text: "Single Works",
        linkHovered: false,
        isDropdown: true,
        dropdown: [
          {
            text: "style 1"
          },{
            text: "style 2"
          },{
            text: "style 3"
          },{
            text: "style 4"
          }
        ]
      },
    ],
    [
      {
        text: "about us",
        linkHovered: false,
        isDropdown: true,
        dropdown: [
          {
            text: "about us"
          }, {
            text: "about us 2"
          }, {
            text: "about me"
          }
        ]
      },{
        text: "services",
        linkHovered: false,
        isDropdown: true,
        dropdown: [
          {
            text: "services"
          },
          {
            text: "single service"
          }
        ]
      },
      {
        text: "blog",
        linkHovered: false,
        isDropdown: true,
        dropdown: [
          {
            text: "3 column"
          },{
            text: "1 column"
          },{
            text: "single post"
          }
        ]
      },{
        text: "coming soon",
        isDropdown: false,
        dropdown: [
          {
            text: "dropdown"
          }
        ]
      },{
        text: "404",
        isDropdown: false,
        dropdown: [
          {
            text: "dropdown"
          }
        ]
      },
    ],
    [
      {
        text: "contact 1",
        isDropdown: false,
        dropdown: [
          {
            text: "dropdown"
          }
        ]
      },
      {
        text: "contact 2",
        isDropdown: false,
        dropdown: [
          {
            text: "dropdown"
          }
        ]
      }
    ]
  ]

  constructor(public scrollService: ScrollService, public translate: TranslateService, public trans: GetTransService) { }

  ngOnInit(): void {
  }

  navLinkEnter(i: number) {
    for(let y = 0; y < this.navbarItems.length; y++) {
      this.navbarItems[y].white = this.navbarItems[y] == this.navbarItems[i];
    }
  }
  navLinkLeave() {
    for(let y = 0; y < this.navbarItems.length; y++) {
      this.navbarItems[y].white = true;
    }
  }

  dropdownLinkHover(dropdownIndex: number, itemIndex: number){
    this.normalDropdownList[dropdownIndex][itemIndex].linkHovered = true;
  }
  dropdownLinkReset(dropdownIndex: number, itemIndex: number){
    this.normalDropdownList[dropdownIndex][itemIndex].linkHovered = false;
  }
}
