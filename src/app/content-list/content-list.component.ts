import { Component } from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    ContentListItemComponent
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent {
  array: string[] = ["Java", "Javascript Frameworks", "PHP & MYSQL", "Portfolio Development"];

}
