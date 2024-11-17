import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../service/courses.service";
import {Course} from "../INT/course";
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-modify-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './modify-list.component.html',
  styleUrl: './modify-list.component.css'
})
export class ModifyListComponent implements OnInit {
  courseForm: FormGroup;
  error: string | null = null;
  course: Course | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private courseServices: CoursesService,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      id: [courseServices.generateNewId(), Validators.required],
      name: ['', Validators.required],
      description: [''],
      roomNumber: ['', Validators.required],
      floorNumber: ['', Validators.required],
    });
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.courseServices.getCourseById(id).subscribe({
        next: course => {
          if(course){
            this.courseForm.patchValue(course);
          }
        },
        error: err => {
          this.error = "[ERROR] Unable to fetch course. Either it was removed, or it doesn't exist.";
          console.error("Error fetching course", err);
        }
      });
    }
  }
  onSubmit(): void {
    if(this.courseForm.valid) {
      const course: Course = this.courseForm.value;

      // check if updating a current course
      if (course.id) {
        // For adding a new course, generate a new ID
        this.courseServices.updateCourse(course).subscribe(() => this.router.navigate(['/courses']));
      } else {
        course.id = this.courseServices.generateNewId();
        this.courseServices.addCourse(course).subscribe(() => this.router.navigate(['/courses']));
      }
    }
    console.log(this.courseForm);
  }
  onDelete(): void {
    const id = this.courseForm.value.id;
      if(id){
        this.courseServices.deleteCourse(id).subscribe(() => this.router.navigate(['/courses']));
    }
  }
  navigatetoCourseList(): void {
    this.router.navigate(['/courses']);
  }
}
