import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoaderType } from './models/loader-type.enum';

@Component({
  selector: 'app-loader',
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  imports: [CommonModule]
})
export class LoaderComponent  {

@Input() public isLoading = false;
@Input() public loaderType: LoaderType = LoaderType.Loading;
protected readonly LoaderType = LoaderType;

}
