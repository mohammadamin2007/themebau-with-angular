import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTransService {
  headerImgText = [];
  aboutTexts = [];
  menuTexts = [];
  featureTexts = [];
  varietyTexts = [];
  fullScreenNavbarTexts = [];

  constructor() { }

  getHeaderTexts(list: []) {
    this.headerImgText = list;
  }

  getAboutTexts(list: []) {
    this.aboutTexts = list;
  }

  getMenuTexts(list: []) {
    this.menuTexts = list;
  }

  getFeatureTexts(list: []) {
    this.featureTexts = list;
  }
  getVarietyTexts(list: []) {
    this.varietyTexts = list;
  }
  getFullScreenNavbarTexts(list: []) {
    this.fullScreenNavbarTexts = list;
  }
}
