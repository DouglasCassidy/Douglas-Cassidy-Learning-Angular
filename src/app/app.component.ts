import {Component} from '@angular/core';
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
export class AppComponent {
  constructor(private courseService: CoursesService){}
  title: string = "Learning Angular";
  firstName: string = "Douglas";
  lastName: string = "Cassidy"
}
