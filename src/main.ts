import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ContentListComponent} from "./app/content-list/content-list.component";
import {ContentListItemComponent} from "./app/content-list-item/content-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListComponent} from "./app/modify-list/modify-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo:"/courses",
    pathMatch:"full"},
    // home page
  {
    path:'courses',
    component: ContentListComponent
  },
    //selected course,
  {
    path:'courses/:id',
    component: ContentListItemComponent},
    // modify a course
  {
    path: 'modify-course/:id',
    component: ModifyListComponent},
    // page not found
  {
    path: "**",
    component: PageNotFoundComponent},
]
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log("Boostrap Completed"));
