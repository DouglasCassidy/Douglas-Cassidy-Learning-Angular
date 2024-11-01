import {Component, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Course} from "../INT/course";
import {CoursesService} from "../service/courses.service";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ContentListItemComponent,
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit {
  courseList: Course[] = [];

  constructor(private courseServices: CoursesService){

  }

  ngOnInit() {
    this.courseServices.getCourses().subscribe({
      next: (data: Course[]) => this.courseList = data,
      error: err => console.log("error getting students", err),
      complete: () => console.log("Courses Fetched")
    })

  }
}
