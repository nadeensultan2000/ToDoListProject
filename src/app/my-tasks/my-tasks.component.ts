import { Component } from '@angular/core';
import { TaskServiceService } from '../task.service.service';


@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})

export class MyTasksComponent {
 newTaskTitle: string='';

  constructor(private taskService: TaskServiceService) { }

  addTask() {
    const task = { title: this.newTaskTitle, done: false };
    this.taskService.addTask(task);

   // this.newTaskTitle = '';
  }
}


