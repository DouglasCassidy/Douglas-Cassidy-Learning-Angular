import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {courseList} from "../data/mock-contents";
import {Course} from "../INT/course";
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = courseList;
  constructor() { }

  // Search courses by ID
  getCourseById(courseId: number): Observable<Course | undefined>{
    const course: Course | undefined  = this.courses.find(course => course.id === courseId);
    return of(course);
  }
  // Add Course
  addCourse(course:Course) : Observable<Course>{
    this.courses.push(course)
    return of(course);
  }
  // Update an existing course
  updateCourse(updatedCourse: Course): Observable<Course[]>{
    const index = this.courses.findIndex(course => course.id === updatedCourse.id);
    if(index !== -1){
      this.courses[index] = updatedCourse;
    }
    return of(this.courses);
  }
  // Delete courses
  deleteCourse(courseId: number): Observable<Course[]> {
    this.courses = this.courses.filter(course => course.id !== courseId)
    return of(this.courses)
  }
  //Returns all Courses
  getCourses(): Observable<Course[]>{
    return of(this.courses)
  }

}
