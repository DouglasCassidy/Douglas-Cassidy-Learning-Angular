import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {courseList} from "../data/mock-contents";
import {Course} from "../INT/course";
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private course: Course[] = courseList;
  constructor() { }

  //Returns all Courses
  getCourses(): Observable<Course[]>{
    return of(this.course)
  }
  // Search courses by ID
  getCourseById(id: number): Observable<Course | undefined>{
    return of (this.course.find(course => course.id === id));
  }
  // Add A course
  addCourse(course: Course): Observable<Course> {
    this.course.push(course);
    return of(course);
  }
  // Update an existing course
  updateCourse(updatedCourse: Course): Observable<Course | undefined>{
    const index = this.course.findIndex(course => course.id === updatedCourse.id);
    if(index > -1){
      this.course[index] = updatedCourse;
      return of(updatedCourse);
    }
    return of(undefined);
  }
  // Delete courses
  deleteCourse(id: number): void{
    this.course = this.course.filter(course => course.id !== id);
  }
  generateNewId(): number{
    return this.course.length > 0 ? Math.max(...this.course.map(course => course.id)) + 1 : 1;
  }
}
