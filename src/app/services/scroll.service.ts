import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  navbarScroll?: boolean;
  navbarHide?: boolean;
  lastPosition: number = 0;
  headerScrollBall?: number;
  varietyScrollBall?: number;
  projectShowCaseScrollBall?: number;
  footerElement?: ElementRef;
  marginRight: string;
  // animationList = [];

  constructor() {
    window.onscroll = () => {
      this.navbarScroll = window.scrollY >= 160;
      if(window.scrollY >= 600) {
        this.navbarHide = this.footerElement?.nativeElement.getBoundingClientRect().top <= window.innerHeight? false : this.lastPosition < window.scrollY;
        this.lastPosition = window.scrollY
      } else {
        this.navbarHide = false;
      }
      this.headerScrollBall = window.scrollY/6 + 18;
      this.varietyScrollBall = window.scrollY/12.8;
      this.projectShowCaseScrollBall = window.scrollY/20;
    }
  }

  getFooter(element?: ElementRef) {
    this.footerElement = element;
  }

  changeMarginRight(l: string) {
    this.marginRight = l;
  }
  // addToAnimationList(element: ElementRef) {
  //   this.animationList.push(element.nativeElement);
  // }
}
