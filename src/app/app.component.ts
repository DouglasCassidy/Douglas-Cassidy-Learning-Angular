import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentListItemComponent} from "./content-list-item/content-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent, ContentListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title: string = "Learning Angular";
  user: User = {
    id: 839438,
    firstName: "Douglas",
    lastName: "Cassidy",
    department: "Mobile Application Development",
    courses:["Java Programming", "Javascript Frameworks", "PHP & MYSQL", "Portfolio Development"],
    courseDuration: 3
  };
  protected readonly ContentListComponent = ContentListComponent;
  protected readonly ContentListItemComponent = ContentListItemComponent;
}
 export interface User {
  id: number,
  firstName: string,
  lastName: string,
  courses: string[],
  department: string,
  courseDuration: number;
}

