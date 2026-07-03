import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients',
  standalone: true,
  templateUrl: './patients.html',
  styleUrls: ['./patients.css'],
  imports: [CommonModule, FormsModule],
})
export class Patients {

  constructor(private router: Router) {}

  showModal = false;

  patients = [
    { id: 'P001', name: 'Riya Sharma', age: 26, gender: 'Female', dept: 'OPD' },
    { id: 'P002', name: 'Aman Kumar', age: 40, gender: 'Male', dept: 'Emergency' }
  ];

  newPatient = {
    name: '',
    age: '',
    gender: '',
    dept: ''
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

  addPatient() {
    const id = 'P' + (this.patients.length + 1).toString().padStart(3, '0');

    this.patients.push({
      id,
      name: this.newPatient.name,
      age: Number(this.newPatient.age),
      gender: this.newPatient.gender,
      dept: this.newPatient.dept
    });

    this.newPatient = { name: '', age: '', gender: '', dept: '' };
    this.closeModal();
  }
}