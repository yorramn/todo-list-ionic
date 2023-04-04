import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../../classes/Todo";
import {IonModal, ItemReorderEventDetail, ModalController} from "@ionic/angular";
import {ModalCreateTodoComponent} from "../modals/modal-create-todo/modal-create-todo.component";
import {ModalEditTodoComponent} from "../modals/modal-edit-todo/modal-edit-todo.component";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent  implements OnInit {
  @Input() todos : Todo[] = []
  public completedTodos : Todo[] = []

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete(this.todos);
  }

  public async openModal(todo : Todo) {
    const modal = await this.modalCtrl.create({
      component: ModalEditTodoComponent,
      componentProps: {todo : todo}
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if(role !== 'confirm') return
    this.todos[this.todos.findIndex(value => value.id === data.id)] = data
  }

  public markTodoAsCompleted(index : number) : void {
    this.todos[index].completed = true
    this.completedTodos.push(this.todos[index])
    this.todos = this.todos.filter(value => !value.completed)
  }

  public markTodoAsInCompleted(index : number) : void {
    this.completedTodos[index].completed = false
    this.todos.push(this.completedTodos[index])
    this.completedTodos = this.completedTodos.filter(value => value.completed)
  }

}
