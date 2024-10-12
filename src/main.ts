import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ContentListComponent} from "./app/content-list/content-list.component";
import {ContentListItemComponent} from "./app/content-list-item/content-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {
    path:'', redirectTo:"/courses", pathMatch:"full"
  },
  {
    path:'courses', component: ContentListComponent
    // home page
  },
  {
    path:'courses/:id', component: ContentListItemComponent
    //selected course
  },
  {
    path: 'modify-course', component: ModifyListItemComponent
    // modify a course
  },
  {
    path: "**", component: PageNotFoundComponent
    // page not found
  }
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log("Boostrap Completed"));
