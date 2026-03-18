import { Component } from '@angular/core';
import { Card } from "../../card/card";
import { BannerCutOut } from '../../banner-cut-out/banner-cut-out';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe-documentation',
  imports: [Card, BannerCutOut, BrowserModule, CommonModule],
  templateUrl: './pipe-documentation.html',
  styleUrl: './pipe-documentation.scss',
})
export class PipeDocumentation {
  objectArray = [
    { content: 'Apple' },
    { content: 'Banana' },
    { content: 'Cherry' },
    { content: 'Date' },
    { content: 'Elderberry' }
  ];
}
