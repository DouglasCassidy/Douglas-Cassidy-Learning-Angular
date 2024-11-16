import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes} from "@angular/router";
import { AppComponent } from './app/app.component';
import {ContentListComponent} from "./app/content-list/content-list.component";
import {ContentListItemComponent} from "./app/content-list-item/content-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListComponent} from "./app/modify-list/modify-list.component";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule, InMemoryDbService} from "angular-in-memory-web-api";
import {InMemoryDataServiceService} from "./app/service/in-memory-data-service.service";
import {importProvidersFrom} from "@angular/core";

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
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService, {delay: 0}))
  ],
}).then(r => console.log("Boostrap Completed"));
