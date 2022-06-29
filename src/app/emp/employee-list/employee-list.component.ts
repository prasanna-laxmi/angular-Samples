import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];

  // This property keeps track of which radio button is selected
  // We have set the default value to All, so all the employees
  // are displayed in the table by default
  selectedEmployeeCountRadioButton: string = 'All';

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getMaleEmployeesCount(): number {
    return this.employees.filter((e) => e.gender === 'Male').length;
  }

  getFemaleEmployeesCount(): number {
    return this.employees.filter((e) => e.gender === 'Female').length;
  }

  // Depending on which radio button is selected, this method updates
  // selectedEmployeeCountRadioButton property declared above
  // This method is called when the child component (EmployeeCountComponent)
  // raises the custom event - countRadioButtonSelectionChanged
  // The event binding is specified in employeeList.component.html
  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
}
