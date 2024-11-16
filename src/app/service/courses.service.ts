import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {courseList} from "../data/mock-contents";
import {Course} from "../INT/course";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = "api/courses";
  private course: Course[] = courseList;
  constructor(private http: HttpClient) { }

  //Returns all Courses
  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl);
  }
  // Search courses by ID
  getCourseById(id: number): Observable<Course>{
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }
  // Add A course
  addCourse(course: Course): Observable<Course> {
    course.id = this.generateNewId();
    return this.http.post<Course>(`${this.apiUrl}`, course);
  }
  // Update an existing course
  updateCourse(updatedCourse: Course): Observable<Course | undefined>{
    const url = `${this.apiUrl}/${updatedCourse.id}`;
    return this.http.put<Course>(url, updatedCourse);
  }
  // Delete courses
  deleteCourse(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  generateNewId(): number{
    return this.course.length > 0 ? Math.max(...this.course.map(course => course.id)) + 1 : 1;
  }
}
