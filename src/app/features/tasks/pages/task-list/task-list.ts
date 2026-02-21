import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-task-list',
  imports: [CommonModule, MatCardModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {

  tasks = [
    {id: '1', title: 'Learn Angular', status: 'pending' },
    { id: '2', title: 'Learn Ngrx', status: 'completed'}
  ]

}
