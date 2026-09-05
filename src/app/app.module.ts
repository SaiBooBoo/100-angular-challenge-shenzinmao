import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { App } from "./app";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { TopOfPage } from "./components/top-of-page/top-of-page";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    App,
    ToolbarComponent,
    TopOfPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
