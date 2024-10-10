import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ContentListComponent} from "./app/content-list/content-list.component";
import {ContentListItemComponent} from "./app/content-list-item/content-list-item.component";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {
    path:"courses", component: ContentListComponent
  },
  {
    path:"courses/:id", component: ContentListItemComponent
  }
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log("Boostrap Completed"));
