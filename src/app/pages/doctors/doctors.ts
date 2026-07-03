import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctors.html',
  styleUrls: ['./doctors.css']
})
export class Doctors {

  constructor(private router: Router) {}

  showModal = false;

  doctors = [
    { id: 'D001', name: 'Dr. Sharma', dept: 'General', status: 'Present' },
    { id: 'D002', name: 'Dr. Mehta', dept: 'Emergency', status: 'Absent' },
    { id: 'D003', name: 'Dr. Khan', dept: 'Maternity', status: 'Present' }
  ];

  newDoctor = {
    name: '',
    dept: '',
    status: ''
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

  addDoctor() {
    const id = 'D' + (this.doctors.length + 1).toString().padStart(3, '0');

    this.doctors.push({
      id,
      name: this.newDoctor.name,
      dept: this.newDoctor.dept,
      status: this.newDoctor.status
    });

    this.newDoctor = { name: '', dept: '', status: '' };
    this.closeModal();
  }

}