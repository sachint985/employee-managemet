import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  cities:string[];
  employees: Employee[];
  emp1: Employee[];
  count:number;
  constructor(private employeeService: EmployeeService) { 
    this.cities = ['Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
  }

  ngOnInit() {
  }

  addEmployee(data:string[]){
      const name = data[0];
      const location = data[1];
      const email  = data[2];
      const mobile = data[3];
      let id = undefined;
      this.employeeService.getEmployees().subscribe(emp=> this.employees = emp);     
      
      if (!name && !location &&!email && !mobile) { return; }
      this.employeeService.addEmployee({id, name, location, email, mobile } as Employee)
        .subscribe(employee => {
          this.employees.push(employee);
        });
    
  }

}
