import {Component, OnInit} from '@angular/core';
import {Course} from "../INT/course";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {CoursesService} from "../service/courses.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.scss'
})
export class ContentListItemComponent implements OnInit{
  course: Course | undefined;
  currentIndex : number = 0;
  courseList: Course[] = [];
  error: string | null = null;
  constructor(private route: ActivatedRoute,
              private courseService: CoursesService,
              private router: Router
  ) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe({
      next: (course: Course[]) => {
        this.courseList = course;
        this.error =  null;

        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if(id){
            this.currentIndex = this.courseList.findIndex(course => course.id === id);
            this.course = this.courseList[this.currentIndex];
          }
        })
      },
      error: err => {
        this.error = "Error Fetching Courses";
        console.error("Error fetching courses: ", err);
      }
    });
  }
  navigateToCourse(id: number): void {
    this.router.navigate(['/courses', id]).then(r => console.log(r));
  }
}
