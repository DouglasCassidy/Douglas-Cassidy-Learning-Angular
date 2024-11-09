import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Course} from "../INT/course";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService{

  createDb():{courses: Course[]} {

    const course: Course[] = [
      {
        id: 1,
        name: "JavaScript Frameworks",
        description:"Programming with Angular",
        roomNumber:"A0306",
        floorNumber:0
      },
      {
        id: 2,
        name: "Java Programming",
        description:"Programming with Java and JavaFX",
        roomNumber:"A0341",
        floorNumber:0,
      },
      {
        id: 3,
        name: "Portfolio Development",
        description: "Making a career portfolio",
        roomNumber: "A3216",
        floorNumber: 3
      },
      {
        id: 4,
        name: "PHP & MYSQL",
        description: "Programming with MYSQL and PDO",
        roomNumber: "A0306",
        floorNumber: 0
      }
    ];
    return {courses: course};
  }
}


