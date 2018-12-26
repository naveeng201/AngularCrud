import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/Forms';
import {Department} from '../models/department.model'
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }
  
  deprtments: Department[] = [
    { id: 1, name: "HR" }  ,
    {id: 2, name: "IT"},
    {id:3, name:"Payroll"},
    {id:4, name:"Admin"} 
  ];
  
  ngOnInit() {
  }
  
  saveEmployee(employee:NgForm): void
  {
    console.log(employee);
  }
}
