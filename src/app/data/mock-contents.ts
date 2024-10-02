import {Component} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {Course} from "../INT/course";

@Component({
  selector: 'mock-contents',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ContentListItemComponent,
  ],
  templateUrl: './content-list.component.html',
})
export class ContentListComponent {
  courseList: Course[] = [];
}
