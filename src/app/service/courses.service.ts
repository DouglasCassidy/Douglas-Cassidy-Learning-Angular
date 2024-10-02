import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {courseList} from "../data/mock-contents";
import {Course} from "../INT/course";
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private course: Course[] = courseList
  constructor() { }

  getCourse(): Observable<Course[]>{
    return of (courseList);
  }
  // Add Course
  addCourse(newCourse:Course) : Observable<Course[]>{
    this.course.push(newCourse)
    return of(this.course);
  }

  // Update existing course
  updateCourse(updatedCourse: Course): Observable<Course[]>{
    const index = this.course.findIndex(course => course.name === updatedCourse.name);
    if(index !== -1){
      this.course[index] = updatedCourse;
    }
    return of (this.course);
  }
  // Delete Course;
  deleteCourse(courseString: string): Observable<Course[]>{
    this.course = this.course.filter(courseName => courseName.name !== courseString);
    return of(this.course);
  }
  getCourseByFloor(courseFloor: number): Observable<Course | undefined>{
    const course = this.course.find(courseName => courseName.floorNumber === courseFloor);
    return of (course);
  }
}
