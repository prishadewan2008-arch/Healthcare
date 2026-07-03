import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tests.html',
  styleUrls: ['./tests.css']
})
export class Tests {

  constructor(private router: Router) {}

  showModal = false;

  tests = [
    { id: 'T001', name: 'Blood Test', cost: 300, available: 'Yes' },
    { id: 'T002', name: 'X-Ray', cost: 800, available: 'Yes' },
    { id: 'T003', name: 'MRI', cost: 2500, available: 'No' }
  ];

  newTest = {
    name: '',
    cost: '',
    available: ''
  };

  goBack() {
    this.router.navigate(['/']);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  addTest() {
    const id = 'T' + (this.tests.length + 1).toString().padStart(3, '0');

    this.tests.push({
      id,
      name: this.newTest.name,
      cost: Number(this.newTest.cost),
      available: this.newTest.available
    });

    this.newTest = { name: '', cost: '', available: '' };
    this.closeModal();
  }

}