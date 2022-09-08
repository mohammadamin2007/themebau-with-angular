import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ScrollService } from "../../services/scroll.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent implements OnInit {
  @Output() openFullNavbar: EventEmitter<string> = new EventEmitter<string>;


  constructor(public scrollService: ScrollService, public translate: TranslateService) { }

  ngOnInit(): void {
  }

  openNavbar() {
    this.openFullNavbar.emit("open");
    document.body.classList.add("overflow-hidden");
    document.body.style.marginRight = "17px";
    this.scrollService.changeMarginRight("17px");
  }
}
