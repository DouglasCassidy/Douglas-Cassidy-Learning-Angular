import {Injectable, Input} from '@angular/core';
import {Observable, of} from "rxjs";
import {courseList} from "../data/mock-contents";
import {Course} from "../INT/course";
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private course: Course[] = courseList;
  constructor() { }

  // Search courses by ID
  getCourseById(courseId: number): Observable<Course | undefined>{
    const course: Course | undefined  = this.course.find(course => course.id === course.id);
    return of(course);
  }
  // Add Course
  addCourse(newCourse:Course) : Observable<Course[]>{
    this.course.push(newCourse)
    return of(this.course);
  }
  // Update an existing course
  updateCourse(updatedCourse: Course): Observable<Course[]>{
    const index = this.course.findIndex(course => course.id === updatedCourse.id);
    if(index !== -1){
      this.course[index] = updatedCourse;
    }
    return of(this.course);
  }
  // Delete courses
  deleteCourse(courseId: number): Observable<Course[]> {
    this.course = this.course.filter(course => course.id !== courseId)
    return of(this.course)
  }
  //Returns all Courses
  getCourses(): Observable<Course[]>{
    return of(courseList)
  }

}
