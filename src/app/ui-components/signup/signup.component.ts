import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/logic-components/classes/User';
import { CroncreteMediator } from 'src/app/ui-components/signup/mediator/ConcreteMediator';
import { UserService } from 'src/app/logic-components/services/UserService';
import { Imediadator } from './mediator/IMediator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpComponent {
  user: User;
  signUpForm: FormGroup | undefined;

  constructor(private userService: UserService, private croncreteMediator: CroncreteMediator) {
    this.user = new User();
    this.croncreteMediator.register(this)
    // this.signUpForm = new FormGroup();
  }

  ngOnInit() { }

  onSubmit() {
    try {
      this.userService.saveUser(this.user).subscribe((data) => {
        this.croncreteMediator.notify(this, 'SUCCESSRESPONSE', JSON.stringify(data));
      },
        (error) => {
          this.croncreteMediator.notify(this, 'ERRORRESPONSE', error);
        })

    } catch (error: any) {
      this.croncreteMediator.notify(this, 'ERRORRESPONSE', error);
    }
  }

}
