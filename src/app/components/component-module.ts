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
import { SearchListComponent } from "./search-list/search-list.component";
import { FilerTermPipeModule } from "../pipe/flatten.pipe/filer-term-pipe.module";
import { TabsComponent } from "./tabs/tabs.component";
import { PagingComponent } from "./paging/paging.component";
import { CounterComponent } from "./counter/counter.component";
import { SimpleTableComponent } from "./simple-table/simple-table.component";
import { SortTableComponent } from "./sort-table/sort-table.component";


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
    DebounceSearchComponent,
    SearchListComponent,
    TabsComponent,
    PagingComponent,
    CounterComponent,
    SimpleTableComponent,
    SortTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FilerTermPipeModule,
    RouterModule.forChild(COMPONENT_ROUTES)
  ]
})
export class ComponentsModule {}
