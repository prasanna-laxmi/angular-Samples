import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './emp/employee-list/employee-list.component';
import { EmployeeCountComponent } from './emp/employee-count/employee-count.component';
import { EmployeeComponent } from './emp/employee/employee.component';
import { EmployeeTitlePipe } from './emp/employee/employee-title.pipe';
import { SimpleComponent } from './emp/simple/simple.component';
import { EventComponent } from './emp/event/event.component';

// import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeTitlePipe,
    EmployeeListComponent,
    EmployeeCountComponent,
    SimpleComponent,
    EventComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
