import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-create-todo',
  templateUrl: './modal-create-todo.component.html',
  styleUrls: ['./modal-create-todo.component.scss'],
})
export class ModalCreateTodoComponent  implements OnInit {
  public formGroup !: FormGroup
  constructor(
    private modalCtrl: ModalController,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() : void {
    this.formGroup = this.formBuilder.group({
      id: [null],
      name : [null, [Validators.required]],
      completed : [null]
    })
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.formGroup.get('id')?.setValue(Math.floor(Math.random() * 15) + 1)
    this.formGroup.get('completed')?.setValue(false)
    return this.modalCtrl.dismiss(this.formGroup.value, 'confirm');
  }
}
