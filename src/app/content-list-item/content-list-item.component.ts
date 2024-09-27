import {Component, Input} from '@angular/core';
import {ContentListComponent} from "../content-list/content-list.component";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {
  @Input() item?:ContentListComponent;
}
