import {Component, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Course} from "../INT/course";
import {CoursesService} from "../service/courses.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {ModifyListComponent} from "../modify-list/modify-list.component";

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
  courseForm!: FormGroup;

  constructor(private courseServices: CoursesService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.courseServices.getCourses().subscribe({
      next: (data: Course[]) => this.courseList = data,
      error: err => console.log("error getting students", err),
      complete: () => console.log("Courses Fetched")
    })

  }

  selectedCourse?: Course;

  selectCourse(course: Course): void {
    this.selectedCourse = course;
  }
}
