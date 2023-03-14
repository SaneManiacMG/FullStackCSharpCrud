import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  public employees: Employee[] = [
    {
      id : 'alsfalkf',
      name : 'Amy',
      email : 'amy@emai.com',
      phone : '01234560695',
      salary : 2500,
      department : 'HR'
    },
    {
      id : 'adfafasvads',
      name : 'Jimmy',
      email : 'jimmy@emai.com',
      phone : '0594646513',
      salary : 3020,
      department : 'Dev'
    },
    {
      id : 'Masfagafgoe',
      name : 'Moe',
      email : 'moe@emai.com',
      phone : '0658432418',
      salary : 5000,
      department : 'Manager'
    }
  ];

  constructor() {}

  ngOnInit(): void {

  }
}
