import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';


@Pipe ({
  name: 'appFlatten',
})
export class FlattenPipeModule implements PipeTransform {
  public transform(values: any[]): any[] {

  return this.flattenArray(values);
  }

private flattenArray(arr: any[]): any[] {
    // Explicitly declare the type here
    const result: any[] = [];

    arr.forEach((value) => {
      if(Array.isArray(value)) {
        result.push(...this.flattenArray(value));
      } else {
        result.push(value);
      }
    });

    return result;
}
}
