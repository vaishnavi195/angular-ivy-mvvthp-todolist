import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  Title = 'MY Task List';
  Tasklist1: string[] = [];
  ngOnInit(): void {
    if (localStorage.getItem('my-tasks')) {
      this.Tasklist1 = JSON.parse(localStorage.getItem('my-tasks'));
    }
  }
}
