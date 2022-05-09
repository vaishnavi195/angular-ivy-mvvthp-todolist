import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks;
  constructor() {}

  ngOnInit() {}
  removeTask(index) {
    this.tasks.splice(index, 1);
  }
}
