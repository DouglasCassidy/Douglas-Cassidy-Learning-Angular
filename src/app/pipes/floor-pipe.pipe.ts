import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'floorPipe',
  standalone: true
})
export class FloorPipePipe implements PipeTransform {
  transform(floorNumber: number): string{
    if(floorNumber == 0){

      return "Basement";
    }
    if(floorNumber == 1){
      return "First Floor";
    }
    if(floorNumber == 2){
      return "Second Floor";
    }
    if(floorNumber == 3){
      return "Third Floor";
    }
    if(floorNumber == 4){
      return "Fourth Floor";
    }
      return String(floorNumber);
  }
}
