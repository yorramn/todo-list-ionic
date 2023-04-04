import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodosComponent} from "./components/todos/todos.component";
import {IonicModule} from "@ionic/angular";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalCreateTodoComponent} from "./components/modals/modal-create-todo/modal-create-todo.component";
import {ModalEditTodoComponent} from "./components/modals/modal-edit-todo/modal-edit-todo.component";



@NgModule({
  declarations: [
    TodosComponent,
    ModalCreateTodoComponent,
    ModalEditTodoComponent
  ],
  exports: [
    TodosComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AppModule { }
