import {Component, Input, input, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {colors} from "@angular/cli/src/utilities/color";
import {Course} from "../INT/course";
import {CoursesService} from "../service/courses.service";
import {Observable} from "rxjs";
import {courseList} from "../data/mock-contents";

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
export class ContentListComponent implements OnInit {
  courseList: Course[] = [];

  constructor(private courseServices: CoursesService) {

  }

  ngOnInit() {
    this.courseServices.getCourses().subscribe({
      next: (data: Course[]) => this.courseList = data,
      error:err => console.log("error getting students", err),
      complete:() => console.log("Courses Fetched")
    })
  }
  selectedCourse?: Course;
  selectCourse(course: Course): void {
    this.selectedCourse = course;
  }
}
