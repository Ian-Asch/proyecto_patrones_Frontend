import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/logic-components/services/UserService';
import { ConcreteMediator } from 'src/app/ui-components/login/mediator/ConcreteMediator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  identificationNumber: string = '';
  password: string = '';
  

  constructor(private userService: UserService, private concreteMediator: ConcreteMediator, private router: Router) {
    this.concreteMediator.register(this);
  }

  onSubmit() {
    console.log('Submitting form');
    try {
      this.userService.authUser(this.identificationNumber, this.password).subscribe(
        (data) => {
          alert('Success: ' + JSON.stringify(data));
          this.router.navigate(['/transporterView', { identificationNumber: this.identificationNumber }]);

          this.concreteMediator.notify(this, 'SUCCESSRESPONSE', JSON.stringify(data));
        },
        (error) => {
          alert('Error: ' + error.message);
          this.concreteMediator.notify(this, 'ERRORRESPONSE', error);
        }
      );
    } catch (error: any) {
      this.concreteMediator.notify(this, 'ERRORRESPONSE', error);
    }
  }
}
