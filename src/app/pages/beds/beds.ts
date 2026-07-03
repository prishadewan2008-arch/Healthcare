import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beds',
  standalone: true,
  templateUrl: './beds.html',
  styleUrls: ['./beds.css'],
  imports: [CommonModule, FormsModule],
})
export class Beds {

  constructor(private router: Router) {}

  showModal = false;

  beds = [
    { id: 'B001', ward: 'ICU', status: 'Occupied' },
    { id: 'B002', ward: 'General', status: 'Available' },
    { id: 'B003', ward: 'Maternity', status: 'Occupied' }
  ];

  newBed = {
    ward: '',
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

  addBed() {
    const id = 'B' + (this.beds.length + 1).toString().padStart(3, '0');

    this.beds.push({
      id,
      ward: this.newBed.ward,
      status: this.newBed.status
    });

    this.newBed = { ward: '', status: '' };
    this.closeModal();
  }
}