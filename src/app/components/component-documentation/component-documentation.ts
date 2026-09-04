import { Component, Input } from '@angular/core';
import { AccordionItem } from '../../accordion/accordian-item-interface';
import { LoaderType } from '../loader/models/loader-type.enum';


@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.html',
  styleUrls: ['./component-documentation.scss'],

})
export class ComponentDocumentation {
  public tabs = [
    { title: 'Paging', active: true },
    { title: 'Counter', active: false }
  ];

  public selectedTab = 0;

  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ];

  public toggleValue = false;
  public progressValue = 25;
  public loaderType = LoaderType.Loading;

  public debounceExampleMethod(value: string): void {
    console.log("Debounce Documentation: ", value);
  }
}
