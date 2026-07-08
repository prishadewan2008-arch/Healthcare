import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    if (this.username.trim() && this.password.trim()) {
      this.router.navigate(['/home']);
    } else {
      alert('Please enter username and password.');
    }

  }

}