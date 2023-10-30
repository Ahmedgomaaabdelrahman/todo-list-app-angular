import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Modals/Task.modal';
import { TaskService } from '../../services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task : Task | undefined ;
  rtlDirection : boolean | undefined;

  
  constructor(private taskService: TaskService){

  }


  ngOnInit(){ 
    this.taskService.isRTLDirection.subscribe(dir => this.rtlDirection = dir)
  }
  onChangeTask(){ 
    
    if(this.task?.id) {
      this.task.taskIsDone = !this.task.taskIsDone 
      this.taskService.updateTask(this.task.id, this.task).subscribe((res) => console.log(res))
    } 

  }



  deleteTaskById() {
    if(this.task?.id) {
      this.taskService.deleteTaskById(this.task?.id).subscribe(
        (res) => {
          this.taskService.getAllTasks();
         
          // Optionally, update your component's state or perform any necessary actions.
        },
        (error) => {
          console.error('Error deleting task:', error);
        }
      );
    }
    
  }






}
