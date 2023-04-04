import { CommonModule } from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {IonicModule, ModalController, RefresherCustomEvent} from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import {Todo} from "../classes/Todo";
import {AppModule} from "../app.module";
import {ModalCreateTodoComponent} from "../components/modals/modal-create-todo/modal-create-todo.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MessageComponent, AppModule],
})
export class HomePage implements OnInit{
  public todos : Todo[] = []

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.todos = [
      {
        id : Math.floor(Math.random() * 15) + 1,
        name : 'Teste',
        completed : false
      },
    ]
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  /* Asyncs Functions */

  public async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalCreateTodoComponent,
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if(role !== 'confirm') return
    const array : Array<Todo> = [...this.todos]
    array.push(data)
    this.todos = array
  }
}
