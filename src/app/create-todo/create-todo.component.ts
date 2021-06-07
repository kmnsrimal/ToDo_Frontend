import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import {  NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  bookForm: FormGroup;
  category : any=[];
  // constructor() { }

  // ngOnInit(): void {
  // }
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userService: UserService
  ) {
    this.bookForm = this.formBuilder.group({
      title: [''],
      description: [''],
      duedate: [''],
      status: [''],
      category: [''],
      functions: ['']
    })
  }

  ngOnInit() {

    this.category = this.getOrders();
   }

   getOrders() {
    this.userService.category().subscribe(res => {
      console.log(res)
      this.category=res;
    });
    // return [
    //   { id: '1', name: 'order 1' },
    //   { id: '2', name: 'order 2' },
    //   { id: '3', name: 'order 3' },
    //   { id: '4', name: 'order 4' }
    // ];
  }

  // onSubmit()
  // {

  // }

  onSubmit(): any {
    console.log(this.bookForm.value);
    this.userService.CreateToDo(this.bookForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/todo'))
      },
       (err) => {
        console.log(err);
    });
  }
}

