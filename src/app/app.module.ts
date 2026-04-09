import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { App } from "./app";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { Card } from "./card/card";
import { Accordion } from "./accordion/accordion";
import { ProgressBar } from "./progress-bar/progress-bar";
import { StarRating } from "./star-rating/star-rating";
import { TopOfPage } from "./top-of-page/top-of-page";

@NgModule({
  declarations: [
    App,
    ToolbarComponent,
    Card,
    Accordion,
    ProgressBar,
    StarRating,
    TopOfPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
