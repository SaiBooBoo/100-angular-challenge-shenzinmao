import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post-component',
  templateUrl: './twitter-post-component.component.html',
  styleUrls: ['./twitter-post-component.component.scss']
})
export class TwitterPostComponentComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() public baseHref = 'https://github.com/SaiBooBoo';
  @Input() public hashTags: string[] = ['SaiBooBoo', 'Angular', 'TwitterPostComponent'];

  constructor(public titleService: Title) {}

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a CODING GOD!!!`);
    return `${base}${message}`;
   }

  private getBaseWithHashTagsAndRoute() {
    const route = encodeURI(this.baseHref);
  const hashTags = this.hashTags.join(',');

return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&
relat4ed=pizzapokerguy&url=${route}`;
  }
}

// holy grail

