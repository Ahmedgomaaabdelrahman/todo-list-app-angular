import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Modals/Task.modal';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  firebaseAPI:string = "https://todolist-b20a7-default-rtdb.firebaseio.com/"
  tasksChanged: Subject<Task[]> = new Subject<Task[]>;
  filterValue: Subject<string> = new Subject();
  isRTLDirection: Subject<boolean> = new Subject();
  constructor(private http:HttpClient) { }

  addNewTask(taskBody: {title: string, description: string}) {
    const addTaskUrl = this.firebaseAPI + "tasks.json";
    return this.http.post(addTaskUrl, taskBody);
  }

  getAllTasks() {
    const getTasksUrl = this.firebaseAPI + "tasks.json";
    return this.http.get<Task[]>(getTasksUrl).pipe(map(
      tasks => {
        const tasksArray = [];
        for (let taskKey  in tasks){
          if(tasks.hasOwnProperty(taskKey)) {
            tasksArray.push({...tasks[taskKey] , id: taskKey})
          }
        }
        return tasksArray
      }
    )).subscribe(tasksArray => this.tasksChanged.next(tasksArray));

  }

  updateTask(taskId: string, updatedTask: Task) {
    const updateTaskUrl = `${this.firebaseAPI}/tasks/${taskId}.json`;
    return this.http.put(updateTaskUrl, updatedTask);
  }

  getTaskById(taskId: string) {
    const getTaskUrl = `${this.firebaseAPI}/tasks/${taskId}.json`;
    return this.http.get<Task>(getTaskUrl);
  }

  deleteTaskById(taskId: string) {
    const deleteUrl = `${this.firebaseAPI}/tasks/${taskId}.json`;
    return this.http.delete(deleteUrl);
  }
}
