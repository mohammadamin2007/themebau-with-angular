import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { ScrollService } from "./services/scroll.service";
import {TranslateService} from "@ngx-translate/core";
import {GetTransService} from "./services/get-trans.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild("footer") footer?: ElementRef;
  navbarOpen: boolean = false;
  showFullNavbar: boolean = false;
  top!: number;
  left!: number;
  showImg: boolean = false;
  openLangList: boolean = true;

  constructor(public scrollService: ScrollService, public translate: TranslateService, public trans : GetTransService) {
    translate.addLangs(["en", "fa"]);
    translate.setDefaultLang("fa");
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|fa/)? browserLang: "en");
    this.translate.get("headerImg").subscribe(list=>{
      this.trans.getHeaderTexts(list)
    });
    this.translate.get("aboutTexts").subscribe(list=>{
      this.trans.getAboutTexts(list)
    });
    this.translate.get("menuTexts").subscribe(list=>{
      this.trans.getMenuTexts(list)
    });
    this.translate.get("featureTexts").subscribe(list=>{
      this.trans.getFeatureTexts(list)
    });
    this.translate.get("varietyTexts").subscribe(list=>{
      this.trans.getVarietyTexts(list)
    });
    this.translate.get("fullScreen").subscribe(list=>{
      this.trans.getFullScreenNavbarTexts(list)
    });
  }

  changeLang(lang:string){
    this.translate.use(lang);
    this.translate.get("headerImg").subscribe(list=>{
      this.trans.getHeaderTexts(list)
    });
    this.translate.get("aboutTexts").subscribe(list=>{
      this.trans.getAboutTexts(list)
    });
    this.translate.get("menuTexts").subscribe(list=>{
      this.trans.getMenuTexts(list)
    });
    this.translate.get("featureTexts").subscribe(list=>{
      this.trans.getFeatureTexts(list)
    });
    this.translate.get("varietyTexts").subscribe(list=>{
      this.trans.getVarietyTexts(list)
    });
    this.translate.get("fullScreen").subscribe(list=>{
      this.trans.getFullScreenNavbarTexts(list)
    });
  }

  // linkImgFunction(e: MouseEvent) {
  //     this.top = e.clientY;
  //     this.left = e.clientX;
  // }

  ngAfterViewInit() {
    this.scrollService.getFooter(this.footer);
  }

  navbarOpeningOp() {
    this.showFullNavbar = true;
    setTimeout(() => {
      this.navbarOpen = true;
    }, 100)
  }
}
