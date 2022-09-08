import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.scss']
})
export class ResponsiveComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
