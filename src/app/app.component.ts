import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentListItemComponent} from "./content-list-item/content-list-item.component";
import {CoursesService} from "./service/courses.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent, ContentListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private courseService: CoursesService){

  }
  title: string = "Learning Angular";
  firstName: string = "Douglas";
  lastName: string = "Cassidy"

  ngOnInit() {
    // Finding a course by ID
    this.courseService.getCourseById(1);

    // Adding a new Course
    this.courseService.addCourse({
      id:5,
      name:"Object Oriented Analysis and Design",
      floorNumber:3,
      roomNumber:"A3306",
      description:"Using Analysis and Designing to develop programs"})
  }
}
