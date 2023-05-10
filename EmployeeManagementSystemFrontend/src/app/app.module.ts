import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './component/view-employee/view-employee.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'view-employee/:id', component: ViewEmployeeComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, CreateEmployeeComponent, UpdateEmployeeComponent, ViewEmployeeComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
