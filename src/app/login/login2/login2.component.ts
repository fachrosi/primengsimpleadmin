import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  standalone: false,
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component {

  constructor(
    private router : Router
  ){

  }

  onLogin(){
    this.router.navigate(['/'])
  }
}
