import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { BannerCutOut } from '../banner-cut-out/banner-cut-out';

@NgModule({
  declarations: [
    Card,
    BannerCutOut
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Card,
    BannerCutOut
  ]
})
export class SharedModule { }
