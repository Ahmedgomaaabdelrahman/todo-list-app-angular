import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task-service.service';
import { Task } from '../../Modals/Task.modal';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasksList : Task[] = []; ;
  showSpinner: boolean = false;
  filterValue: string = '';
  today: Date | undefined;
  dayOfWeek: any;

  constructor(private taskService: TaskService){}

  ngOnInit() {
    this.today = new Date();
    const datePipe = new DatePipe('en-US');
    this.dayOfWeek = datePipe.transform(this.today, 'EEEE');

    this.showSpinner = true
    this.taskService.getAllTasks();
    this.taskService.tasksChanged.subscribe((res) => {
      this.tasksList = res;
      setTimeout(() => {
        this.showSpinner = false
      }, 100);
    })
    
    this.taskService.filterValue.subscribe( filterValue => {
      this.filterValue = filterValue;
    })
    
 
  }
}
