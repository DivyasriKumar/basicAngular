import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  goChat() {
    this.router.navigate(['/chat']);
  }
  goProfile() {
   
  }
  goHome() {
     this.router.navigate(['/']);
  }
  isLoggedIn = false;
  constructor(private router: Router) { }
  login() {
    this.router.navigate(['/chat']);
    this.isLoggedIn = true;
  }
}
