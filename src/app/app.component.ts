import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "Learning Angular";
  user: User = {
    id: 839438,
    firstName: "Douglas",
    lastName: "Cassidy",
    department: "Mobile Application Development",
    courses: ["Java", "Javascript Frameworks", "PHP & MYSQL", "Portfolio Development"],
    courseDuration: 3}
}
export interface User {
  id: number,
  firstName: string,
  lastName: string,
  department: string,
  courses : string[],
  courseDuration: number;
}

