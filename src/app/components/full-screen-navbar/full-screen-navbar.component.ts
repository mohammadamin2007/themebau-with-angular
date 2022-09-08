import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {GetTransService} from "../../services/get-trans.service";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-full-screen-navbar',
  templateUrl: './full-screen-navbar.component.html',
  styleUrls: ['./full-screen-navbar.component.scss']
})
export class FullScreenNavbarComponent implements OnInit {
  linkHovered: boolean = false;
  @Input() navbarOpen!: boolean;
  @Input() showFullNavbar!: boolean;
  @Output() changeStatusNavbarOpen: EventEmitter<void> = new EventEmitter<void>;
  @Output() changeStatusShowNav: EventEmitter<void> = new EventEmitter<void>;

  navbarItemList = [
    {
      openCollapse: true,
      collapseItem: [
        {
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        }
      ]
    },
    {
      openCollapse: true,
      collapseItem: [
        {
          collapse: true,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            },{
            }
          ]
        },{
          collapse: true,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            },{
            },{
            },{
            },{
            },{
            }
          ]
        },{
          collapse: true,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            },{
            },{
            },{
            },{
            }
          ]
        },{
          collapse: true,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            },{
            },{
            },{
            }
          ]
        },{
          collapse: true,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            },{
            },{
            },{
            },{
            },{
            }
          ]
        }
      ]
    },
    {
      openCollapse: true,
      collapseItem: [
        {
          collapse: true,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            },{
            }
          ]
        },{
          collapse: true,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            },{
            }
          ]
        },{
          collapse: true,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            },{
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        }
      ]
    },
    {
      openCollapse: true,
      collapseItem: [
        {
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        },{
          collapse: false,
          collapseInCollapseOpen: true,
          collapseItem: [
            {
            }
          ]
        }
      ]
    }
  ]

  constructor(public translate: TranslateService, public trans: GetTransService, private scrollService: ScrollService) {}

  ngOnInit(): void {
  }

  navbarClosingOp() {
    this.navbarOpen = false;
    setTimeout(() => {
      this.showFullNavbar = false;
      this.changeStatusNavbarOpen.emit();
      this.changeStatusShowNav.emit();
      document.body.style.marginRight = "";
      document.body.classList.remove("overflow-hidden");
      this.scrollService.marginRight = "";
      }, 200)
  }
}
