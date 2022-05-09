import { Component, Input, VERSION } from '@angular/core';

@Component({
  selector: 'my-task-form',
  templateUrl: './Task-Form.component.html',
  styleUrls: ['./Task-Form.component.css'],
})
export class TaskFormComponent {
  @Input() tasksListnew;
  taskname: string;
  taskAdd() {
    this.tasksListnew.unshift(this.taskname);
    localStorage.setItem('my-tasks', JSON.stringify(this.tasksListnew));
    this.taskname = '';
  }
}
