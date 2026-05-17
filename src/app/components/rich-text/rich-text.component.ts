import { Component, Input, OnInit } from '@angular/core';
import { htmlRegex } from './html-regex.data';

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public validHtml = '';
  @Input() set htmlText(value: string) {
    const html = this.parseNonEmptyHtml(value);

    const isValidHtml = htmlRegex.test(html);
    this.validHtml = isValidHtml ? html : '';
  }

  private parseNonEmptyHtml(html: string = '') {
    const htmlTags: RegExp = /<[^>]+>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;

    return hasContent ? html : '';
  }
}
