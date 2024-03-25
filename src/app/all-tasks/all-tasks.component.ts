
import { Component } from '@angular/core';
import { TaskServiceService } from '../task.service.service';
@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})

export class AllTasksComponent{
  tasks: { title: string; done: boolean }[] = [];

  constructor(private taskService: TaskServiceService) {
    this.tasks = this.taskService.getTasks();
  }

  }


