import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentDocumentation } from "./component-documentation/component-documentation";
import { RouterModule } from "@angular/router";
import { COMPONENT_ROUTES } from "./component.routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentDocumentation,
    RouterModule.forChild(COMPONENT_ROUTES)
  ]
})
export class ComponentsModule {

}
