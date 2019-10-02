import { Component, OnInit } from '@angular/core';
import { SharedService } from '../SharedService';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  name:string;
  location:string;
  email:string;
  mobile:string;
  cities:string[];
  service:SharedService;
  router:Router;
  num:number;
  employee: Employee;
  constructor(service:SharedService, router: Router,private employeeService: EmployeeService) {
    this.service = service;
    this.router = router;
    this.num = service.getData(); 
    console.log(this.num);
    this.employeeService.getEmployee(this.num).subscribe(employ => this.employee = employ);
    this.cities = ['Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
  }

  ngOnInit() {
    
  } 

  updateEmployee(params:string[]) {
    if(!params[0] || !params[1] || !params[2] || !params[3]){
      return;
    }
    this.employee.name = params[0];
    this.employee.location = params[1];
    this.employee.email = params[2];
    this.employee.mobile = params[3];

    this.employeeService.updateEmployee(this.employee).subscribe(emp => this.employee = emp);
  }

}
