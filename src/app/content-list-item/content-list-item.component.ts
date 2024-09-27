import {Component, Input, OnInit} from '@angular/core';
import {ContentListComponent} from "../content-list/content-list.component";
import {AppComponent, User} from "../app.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {
  @Input() user?:User;
}
