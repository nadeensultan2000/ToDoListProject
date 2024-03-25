import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  tasks: { title: string; done: boolean }[] = [];

  addTask(task: { title: string; done: boolean }) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}
