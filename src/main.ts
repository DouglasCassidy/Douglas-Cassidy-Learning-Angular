import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes} from "@angular/router";
import { AppComponent } from './app/app.component';
import {ContentListComponent} from "./app/content-list/content-list.component";
import {provideHttpClient, } from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataServiceService} from "./app/service/in-memory-data-service.service";
import {importProvidersFrom} from "@angular/core";

/**
 * <h1>Routes</h1>
 * <p>Invoked to provide a better solution to
 * efficiently switch between pages</p>
 */
const routes: Routes = [

  /**
   * Default path | Eager Loading
   */
  {path: '', redirectTo:"/courses", pathMatch:"full"},

  // home page
  {path:'courses', component: ContentListComponent},

  //selected course,
  {path: 'courses/:id',
    loadComponent: () => import('./app/content-list-item/content-list-item.component').then(m => m.ContentListItemComponent)},
  // modify a course
  {path: 'modify-course/:id',
    loadComponent: () => import('./app/modify-list/modify-list.component').then(m => m.ModifyListComponent)},

  // page not found
  {path: "**",
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(
        m => m.PageNotFoundComponent)},
]
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService, {delay: 1}))
  ],
}).catch(err => console.error(err));
