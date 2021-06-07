import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '../app/auth/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { StatusUpdateComponent } from './status-update/status-update.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CreateTodoComponent,
    StatusUpdateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    RouterModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
