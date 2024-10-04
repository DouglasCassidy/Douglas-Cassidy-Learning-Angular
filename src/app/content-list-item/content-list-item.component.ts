import {Component, Input} from '@angular/core';
import {Course} from "../INT/course";
import {NgIf} from "@angular/common";
import {CoursesService} from "../service/courses.service";


@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.scss'
})
export class ContentListItemComponent {
  @Input() course?: Course;
}
