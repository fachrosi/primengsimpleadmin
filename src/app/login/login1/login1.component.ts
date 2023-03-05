import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component {
  
  constructor(
    private router : Router
  ){

  }

  onLogin(){
    this.router.navigate(['/'])
  }
}
