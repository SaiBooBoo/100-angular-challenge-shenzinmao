import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-component',
  templateUrl: './loader-component.component.html',
  styleUrls: ['./loader-component.component.scss']
})
export class LoaderComponentComponent implements OnInit {
ngOnInit(): void {
  // You can perform any initialization logic here if needed.
  // For a loader component, you might not need to do anything,
  // but you could log or set up additional state if required.
  // Example:
  // console.log('LoaderComponentComponent initialized. isloading:', this.isloading);
}

 @Input() public isLoading = false;

}
