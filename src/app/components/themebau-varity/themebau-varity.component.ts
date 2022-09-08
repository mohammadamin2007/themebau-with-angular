import { Component, OnInit } from '@angular/core';
import { ScrollService } from "../../services/scroll.service";
import {GetTransService} from "../../services/get-trans.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-themebau-varity',
  templateUrl: './themebau-varity.component.html',
  styleUrls: ['./themebau-varity.component.scss']
})
export class ThemebauVarityComponent implements OnInit {


  constructor(public scrollService: ScrollService, public translate : TranslateService,public trans: GetTransService) {}

  ngOnInit(): void {
  }

}
