import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[];
  private employeesUrl = 'api/employees';

  httpOptions = {
    headers: new Headers({'Content-type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  public getEmployees(){
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url);
  }


  searchEmployee(str){
    if (!str.trim()) {
      // if not search term, return empty hero array.
      return this.getEmployees();
    }
    return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${str}`);
  }

  addEmployee(employee: Employee){
    return this.http.post<Employee>(this.employeesUrl, employee);
  }

  updateEmployee (employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee);
  }

  deleteEmployee (emp:Employee | number){
    const id = typeof emp === 'number' ? emp : emp.id;
    const url = `${this.employeesUrl}/${id}`;
    return this.http.delete(url);
  }
}
