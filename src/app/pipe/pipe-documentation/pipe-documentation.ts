import { Component } from '@angular/core';
import { Card } from "../../card/card";
import { BannerCutOut } from '../../banner-cut-out/banner-cut-out';

@Component({
  selector: 'app-pipe-documentation',
  imports: [Card, BannerCutOut],
  templateUrl: './pipe-documentation.html',
  styleUrl: './pipe-documentation.scss',
})
export class PipeDocumentation {

}
