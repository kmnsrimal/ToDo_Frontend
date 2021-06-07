import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {  NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {   ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  getId: any;
  Id:any;
  ToDo:any = [];
  Data:any=[]
  date:any;
  // updateForm: FormGroup;
  duedateForm: FormGroup;


  constructor(
    private service :UserService,
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
    ) {
      this.duedateForm = this.formBuilder.group({
        date: [''],
        // description: [''],
        // duedate: [''],
        // status: [''],
        // category: [''],
        // functions: ['']
      })
    }
    find(data:any) {
      this.Id =data.id;
      // console.log(this.Id);
      this.Data= data;
      // this.Send(this.Data,this.duedateForm.value);
  }
  deleteid(data:any) {
    // this.deleteEmployee(data.id);
    this.Data= data;
}

DeleteFun() {
  console.log(this.Data.id)
  this.deleteEmployee(this.Data.id);

}


    onSubmit(): any {
      console.log(this.duedateForm.value)
      this.Send(this.Data,this.duedateForm.value);

    }

    Send(Data:any,date:any)
    {
      this.service.UpdateDate(Data,date)
      .subscribe(() => {
        console.log('Data updated successfully!')
        this.router.navigateByUrl('/todo')
        // this.ngZone.run(() => this.router.navigateByUrl('/todo'))
      },
       (err) => {
        console.log(err);
    });
console.log(Data);
    }


  // registerForm: FormGroup;
  // submitted = false;
  // get f() { return this.registerForm.controls; }

  // onSubmit() {

  //   this.submitted = true;
  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //       return;
  //   }
  //   //True if all the fields are filled
  //   if(this.submitted)
  //   {
  //     alert("Great!!");
  //   }

  // }
  refresh()
  {
    this.router.navigateByUrl('/todo');
  }

  ngOnInit(): void {

      this.service.default().subscribe(res => {
        console.log(res)
        this.ToDo=res;
      });

      // this.registerForm = this.formBuilder.group({
      //   // email: ['', [Validators.required, Validators.email]],
      //   // password: ['', [Validators.required]],
      //   });


  }



  deleteEmployee(id : number) {
    this.service.deleteEmployee(id);
    // this.notifyDelete.emit(this.employee.id);
    // if(confirm("Are you sure to delete "+id)) {
    //   console.log("Implement delete functionality here");
    // }
  }

// complete(): any {
//   console.log(this.getId);
//   this.service.complete(this.getId)
//   .subscribe(() => {
//       console.log('Data added successfully!')
//       this.ngZone.run(() => this.router.navigateByUrl('/todo'))
//     },
//      (err) => {
//       console.log(err);
//   });
// }

// complete(id:number)
// {
//   // this.getId = this.activatedRoute.snapshot.paramMap.get('id');
//   console.log(id);
//   console.log('complete');
//   this.service.complete();
// }

complete(todo:any): any {
  console.log(todo);
  if(todo.status == 'Cancelled' || todo.status == 'Completed')
  {
    console.log(todo.status);
  }

  else
  {
    this.service.complete(todo)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.router.navigateByUrl('/todo')
        // this.ngZone.run(() => this.router.navigateByUrl('/todo'))
      },
       (err) => {
        console.log(err);
    });
  }

}

}
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// export class AppComponent {
// //Form Validables
// registerForm: FormGroup;
// submitted = false;
// constructor( private formBuilder: FormBuilder){}
// //Add user form actions
// get f() { return this.registerForm.controls; }
// onSubmit() {

//   this.submitted = true;
//   // stop here if form is invalid
//   if (this.registerForm.invalid) {
//       return;
//   }
//   //True if all the fields are filled
//   if(this.submitted)
//   {
//     alert("Great!!");
//   }

// }
//   ngOnInit() {
//     //Add User form validations
//     this.registerForm = this.formBuilder.group({
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required]],
//     });
//   }
// }
