import { Component, Input } from '@angular/core';
import { CroncreteMediator } from '../mediator/ConcreteMediator';

@Component({
  selector: 'success-modal-response',
  templateUrl: './success-response-modal.component.html',
  styleUrls: ['./success-response-modal.component.css']
})

export class SuccessResponseModal {

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
    // setTimeout(()=> {
    //   window.location.href = "/"
    // }, 4000)
  }
}
