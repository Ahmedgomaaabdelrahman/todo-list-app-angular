import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';
import { SearchComponent } from './components/search/search.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { TasksRouterModule } from './tasks.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AddEditTaskComponent,
    SearchComponent,
    TasksListComponent,
    TaskComponent,
    FilterPipe
  ],
  exports: [
    SearchComponent,
    TasksListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TasksRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule

  ]
})
export class TasksModule { }
