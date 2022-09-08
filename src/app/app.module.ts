import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScrollService } from "./services/scroll.service";
import { HeaderComponent } from './components/header/header.component';
import { DescriptionComponent } from './components/description/description.component';
import { DescriptionModelsComponent } from './components/description-models/description-models.component';
import { ProjectShowCaseComponent } from './components/project-show-case/project-show-case.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenuStyleComponent } from './components/menu-style/menu-style.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { ThemebauFeaturesComponent } from './components/themebau-features/themebau-features.component';
import { ThemebauVarityComponent } from './components/themebau-varity/themebau-varity.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { FullScreenNavbarComponent } from './components/full-screen-navbar/full-screen-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetTransService } from "./services/get-trans.service";
// import { AnimationDirective } from './directives/animation.directive';

export function useFactoryFunc(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    DescriptionComponent,
    DescriptionModelsComponent,
    ProjectShowCaseComponent,
    AboutUsComponent,
    MenuStyleComponent,
    ResponsiveComponent,
    ThemebauFeaturesComponent,
    ThemebauVarityComponent,
    MobileNavbarComponent,
    FullScreenNavbarComponent,
    // AnimationDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: useFactoryFunc,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [ScrollService, GetTransService],
  bootstrap: [AppComponent]
})
export class AppModule { }
