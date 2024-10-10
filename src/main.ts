import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {routes} from "./app/app.routes";
import {ContentListComponent} from "./app/content-list/content-list.component";
import {ContentListItemComponent} from "./app/content-list-item/content-list-item.component";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = []

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log("Boostrap Completed"));
