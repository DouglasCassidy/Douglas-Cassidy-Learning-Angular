import {Component, Input, input, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {colors} from "@angular/cli/src/utilities/color";
import {Course} from "../INT/course";
import {CoursesService} from "../service/courses.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ContentListItemComponent,
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit{
  courseList: Observable<Course[]>;

  constructor(private CourseServices: CoursesService){

  }
  ngOnInit() {
    this.courseList = this.CourseServices.getCourse();
    console.log("ContentListComponent Initialized with courses: ", this.courseList);
  }

}
