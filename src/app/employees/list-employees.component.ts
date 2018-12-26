import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees : Employee[] = [
    {
        id: 1,
        name:"mark",
        gender:'Male',
        contactPreference: 'Email',
        email: 'mark@gmail.com',
        department: 'IT',
        isActive: true,
        photoPath: 'assets/images/Mark.jpg'
    },
{
        id: 2,
        name:"john",
        gender:'Male',
        contactPreference: 'Email',
        email: 'john@gmail.com',
        department: 'IT',
        isActive: true,
        photoPath: 'assets/images/john.jpg'
    },
    {
        id: 1,
        name:"arika",
        gender:'Female',
        contactPreference: 'Email',
        email: 'arika@gmail.com',
        department: 'IT',
        isActive: true,
        photoPath: 'assets/images/arika.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
