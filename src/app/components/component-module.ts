import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentDocumentation } from "./component-documentation/component-documentation";
import { RouterModule } from "@angular/router";
import { COMPONENT_ROUTES } from "./component.routes";
import { Accordion } from "../accordion/accordion";
import { ProgressBar } from "../progress-bar/progress-bar";
import { StarRating } from "../star-rating/star-rating";
import { SharedModule } from "../shared/shared.module";
import { LoaderComponentComponent } from "../loader-component/loader-component.component";

@NgModule({
  declarations: [
    ComponentDocumentation,
    Accordion,
    ProgressBar,
    StarRating,
    LoaderComponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(COMPONENT_ROUTES)
  ]
})
export class ComponentsModule {}
