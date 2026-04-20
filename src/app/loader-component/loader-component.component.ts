import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from '../components/loader/models/loader-type.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader-component',
  templateUrl: './loader-component.component.html',
  styleUrls: ['./loader-component.component.scss']
})
export class LoaderComponentComponent implements OnInit {
ngOnInit(): void {
 if(this.loaderType === LoaderType.Loading) {
  this.updateLoaderPeriods();
 }
}

 @Input() public isLoading = false;
 @Input() public loaderType: LoaderType = LoaderType.Loading;
  public LoaderType = LoaderType;

  public get loadingText(): string {
    return `${this.loading}${this.loadingPeriods}`;
  }
  private loading = 'Loading';
  private loadingPeriods = '.\0\0';

  private updateLoaderPeriods() {
    let currentStep = 0;

    setInterval(() => {
      switch(currentStep % 3) {
        case 0:
        this.loadingPeriods = '..';
        currentStep++;
        break;
        case 1:
        this.loadingPeriods = '...';
        currentStep++;
        break;
        case 2:
        this.loadingPeriods = '.';
        currentStep = 0;
        break;
      }
    }, 500)

  }

}
