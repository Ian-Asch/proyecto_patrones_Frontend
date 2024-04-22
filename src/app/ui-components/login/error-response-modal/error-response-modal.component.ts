import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/logic-components/services/UserService';
import { CroncreteMediator } from '../mediator/ConcreteMediator';

@Component({
  selector: 'error-modal-response',
  templateUrl: './error-response-modal.component.html',
  styleUrls: ['./error-response-modal.component.css']
})

export class ErrorResponseModal {

  @Input() response: string = "";

  close: boolean = false;

  constructor(private croncreteMediator: CroncreteMediator) {
    this.croncreteMediator.register(this)
  }

  ngOnInit() {}

  closeModal() {
    this.close = !this.close;
  }

  openModal(message: string) {
    this.response = JSON.stringify(message);
    this.close = !this.close;
  }
}
