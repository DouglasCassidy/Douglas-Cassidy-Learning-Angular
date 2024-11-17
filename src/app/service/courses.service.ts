import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {courseList} from "../data/mock-contents";
import {Course} from "../INT/course";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = "api/courses";
  private course: Course[] = courseList;
  constructor(private http: HttpClient) { }

  //Returns all Courses
  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl).pipe(catchError(this.handlerError));
  }
  // Search courses by ID
  getCourseById(id: number): Observable<Course>{
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(catchError(this.handlerError));
  }
  // Add A course
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}`, course).pipe(catchError(this.handlerError));
  }
  // Update an existing course
  updateCourse(updatedCourse: Course): Observable<Course | undefined>{
    const url = `${this.apiUrl}/${updatedCourse.id}`;
    return this.http.put<Course>(url, updatedCourse).pipe(catchError(this.handlerError));
  }
  // Delete courses
  deleteCourse(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handlerError));
  }
  generateNewId(): number{
    return this.course.length > 0 ? Math.max(...this.course.map(course => course.id)) + 1 : 1;
  }

  private handlerError(error : HttpErrorResponse){
    console.error("API ERROR: " , error);
    return throwError(() => new Error("Server Error, please try again"));
  }
}
