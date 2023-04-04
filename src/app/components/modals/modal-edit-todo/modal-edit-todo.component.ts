import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../../classes/Todo";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-modal-edit-todo',
  templateUrl: './modal-edit-todo.component.html',
  styleUrls: ['./modal-edit-todo.component.scss'],
})
export class ModalEditTodoComponent  implements OnInit {
  public formGroup !: FormGroup
  @Input() todo !: Todo
  constructor(
    private formBuilder : FormBuilder,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.initializeForm()
    this.fillForm(this.todo)
  }

  initializeForm() : void {
    this.formGroup = this.formBuilder.group({
      id: [null],
      name : [null, [Validators.required]],
      completed : [null]
    })
  }

  fillForm(todo : Todo) : void {
    this.formGroup.setValue(todo)
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.formGroup.value, 'confirm');
  }
}
