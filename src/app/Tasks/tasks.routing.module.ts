import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";
import { AddEditTaskComponent } from "./components/add-edit-task/add-edit-task.component";

const TasksRoutes : Routes = [
    { path: '' , component: TasksListComponent , pathMatch:'full'},
    { path: 'add' , component: AddEditTaskComponent},
    { path: 'edit/:id' , component: AddEditTaskComponent},
    { path: '**' , redirectTo:'/'},
];

@NgModule({
    declarations: [
    ],
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(TasksRoutes)
    ]
  })
  export class TasksRouterModule { }