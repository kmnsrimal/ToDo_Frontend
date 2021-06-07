import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TodoComponent } from './todo/todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { StatusUpdateComponent } from './status-update/status-update.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'todo', component: TodoComponent },
  { path: 'create', component: CreateTodoComponent },
  { path: 'edit_status/:id', component: StatusUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
