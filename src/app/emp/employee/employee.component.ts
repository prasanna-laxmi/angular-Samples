import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  columnSpan: number = 2;
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  gender: string = 'Male';
  age: number = 20;
  showDetails: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
