import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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
import { QuoteComponent } from "./quote/quote.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { RichTextComponent } from "./rich-text/rich-text.component";
import { DebounceSearchComponent } from "./debounce-search/debounce-search.component";


@NgModule({
  declarations: [
    ComponentDocumentation,
    Accordion,
    ProgressBar,
    StarRating,
    LoaderComponentComponent,
    TwitterPostComponentComponent,
    LinkedInComponentComponent,
    ModalComponent,
    QuoteComponent,
    ToggleComponent,
    RichTextComponent,
    DebounceSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(COMPONENT_ROUTES)
  ]
})
export class ComponentsModule {}
