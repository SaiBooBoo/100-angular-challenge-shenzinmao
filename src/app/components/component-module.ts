import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentDocumentation } from "./component-documentation/component-documentation";
import { RouterModule } from "@angular/router";
import { COMPONENT_ROUTES } from "./component.routes";
import { Accordion } from "../accordion/accordion";
import { ProgressBar } from "./progress-bar/progress-bar";
import { StarRating } from "./star-rating/star-rating";
import { SharedModule } from "../shared/shared.module";
import { TwitterPostComponentComponent } from "./twitter-post-component/twitter-post-component.component";
import { LinkedInComponentComponent } from "./linked-in-component/linked-in-component.component";
import { LoaderComponentComponent } from "./loader-component/loader-component.component";
import { ModalComponent } from "./modal/modal.component";


@NgModule({
  declarations: [
    ComponentDocumentation,
    Accordion,
    ProgressBar,
    StarRating,
    LoaderComponentComponent,
    TwitterPostComponentComponent,
    LinkedInComponentComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(COMPONENT_ROUTES)
  ]
})
export class ComponentsModule {}
