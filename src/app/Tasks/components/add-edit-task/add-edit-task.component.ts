import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task-service.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {
  titleValue: string = '';
  descriptionValue: string = '';
  taskId: string = '';
  error: string = ''
  constructor(private router: Router , private taskservice : TaskService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.taskId = params['id'];

      if(this.taskId) {
        this.taskservice.getTaskById(this.taskId).subscribe(taskData => {
          console.log("TASK DATA" ,  taskData)

          this.titleValue = taskData.title;
          this.descriptionValue = taskData.description; 

        })
      }
     
    });
  }
  saveData(form: any) {
    if (form.valid) {
      
      const taskData = {
        title: this.titleValue,
        description: this.descriptionValue,
        taskIsDone: false
      }

      // edit case
      if(this.taskId) {
        this.taskservice.updateTask(this.taskId, taskData).subscribe(res => {
          this.router.navigate(['/'])
        }, error =>{
          this.error = error.message
        });
      }
      else {
        // addcase
        this.taskservice.addNewTask(taskData).subscribe(res => {
          this.router.navigate(['/'])
        }, error =>{
          this.error = error.message
        });
      }
     
    


    } else {
      if(this.titleValue.trim().length === 0 || this.descriptionValue.trim().length === 0 ) {
        this.error = "Please all required fields"
      }
      // we can handle other validation here 
     
    }
  }

  cancel() {
    // Handle cancel logic here
    this.router.navigate(['/'])
  }
}



