import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {

  private rooter = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl<string>('', {validators: [Validators.required]}),
    status: new FormControl<'pending' | 'completed'>('pending')
  });

  submit() {
    if(this.form.invalid) return;

    console.log("Task Data: ", this.form.value);
    this.rooter.navigate(['/']);
  }

}
