import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { SharedService } from '../SharedService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] =[];
  count: number;
  service: SharedService;
  router: Router;
  employee:Employee;
  constructor(private employeeService: EmployeeService, service: SharedService,router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees():void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  searchEmployee(searchText){
    this.employeeService.searchEmployee(searchText).subscribe(employees => this.employees =employees);
  }

  

  edit(str){
    this.service.saveData(str);
    this.router.navigate(['/editEmployee']);
  }

  delete(str:Employee) {
    this.employees.filter(h=> h != str);
    this.employeeService.deleteEmployee(str).subscribe();
    this.getEmployees();
  }

}
