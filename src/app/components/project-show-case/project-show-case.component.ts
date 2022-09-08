import { Component, OnInit } from '@angular/core';
import { ScrollService } from "../../services/scroll.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-project-show-case',
  templateUrl: './project-show-case.component.html',
  styleUrls: ['./project-show-case.component.scss']
})
export class ProjectShowCaseComponent implements OnInit {

  constructor(public scrollService: ScrollService, public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
