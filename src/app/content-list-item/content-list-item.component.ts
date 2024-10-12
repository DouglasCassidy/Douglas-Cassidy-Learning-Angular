import {Component, OnInit} from '@angular/core';
import {Course} from "../INT/course";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {CoursesService} from "../service/courses.service";
import {ActivatedRoute, RouterLink} from "@angular/router";


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
  constructor(private route: ActivatedRoute,
              private courseService: CoursesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.courseService.getCourseById(Number(id)).subscribe(course => {
        this.course = course;
      })
    }
  }
}
