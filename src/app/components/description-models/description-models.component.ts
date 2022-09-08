import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-description-models]',
  templateUrl: './description-models.component.html',
  styleUrls: ['./description-models.component.scss']
})
export class DescriptionModelsComponent implements OnInit {
  @Input() path?: string;
  @Input() color?: string;
  @Input() i?:number;

  constructor() { }

  ngOnInit(): void {
  }

  consoleLogColor(color?: string) {
    console.log(color)
  }
}
