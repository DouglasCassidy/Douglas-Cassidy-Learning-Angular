import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentListItemComponent} from "./content-list-item/content-list-item.component";
import {NgOptimizedImage} from "@angular/common";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent, ContentListItemComponent, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title: string = "Learning Angular";
}
