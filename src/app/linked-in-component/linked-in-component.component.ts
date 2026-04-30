import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linked-in-component',
  templateUrl: './linked-in-component.component.html',
  styleUrls: ['./linked-in-component.component.scss']
})
export class LinkedInComponentComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public get linkedinMessage(): string {
    const base = "https://www.linkedin.com/shareArticle?mini=true";
    const currentSite = `&url=https://www.DylanIsrael.com${this.router.url}`

    return `${base}${currentSite}`
  }

  // basic site
}
