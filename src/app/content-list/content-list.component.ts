import {Component, input, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {User} from "../app.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    ContentListItemComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit{
  contentItem?: User;
  constructor() {

  }
  ngOnInit() {
    this.contentItem = {
      id: 839438,
      firstName: "Douglas",
      lastName: "Cassidy",
      department: "Mobile application Development",
      courses: ["Java Programming", "Javascript Frameworks", "PHP & MYSQL", "Portfolio Development"],
      courseDuration: 3
    };
  }
}
