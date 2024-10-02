import {Component, Input} from '@angular/core';
import {AppComponent} from "../app.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ContentListComponent} from "../content-list/content-list.component";
import {Course} from "../INT/course";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    ContentListItemComponent,
    NgForOf,
    AppComponent,
    ContentListComponent,
    NgIf,
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {
  @Input() courseList: Course[] = [];


  constructor() {
    this.courseList = [{
      name: "Javascript Frameworks",
      description: "Using angular to build web apps",
      roomNumber: "A0336",
      floorNumber: 0
    }]
  }
}
