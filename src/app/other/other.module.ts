import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { OtherDocumentationComponent } from "./other-documentation/other-documentation.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { OTHER_ROUTES } from "./other.routes";
import { App } from "../app";

@NgModule({
  declarations: [OtherDocumentationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(OTHER_ROUTES)
  ],
  providers: [],
  bootstrap: [App]
})
export class OtherModule {

}
