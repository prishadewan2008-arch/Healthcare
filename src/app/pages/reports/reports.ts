import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.html',
  styleUrls: ['./reports.css']
})
export class Reports {

  constructor(private router: Router) {}

  showModal = false;

  reports = [
    {
      id: 'R001',
      title: 'Weekly Patient Report',
      type: 'Weekly',
      status: 'Generated'
    },
    {
      id: 'R002',
      title: 'Stock Consumption Report',
      type: 'Monthly',
      status: 'Generated'
    },
    {
      id: 'R003',
      title: 'Doctor Attendance Report',
      type: 'Weekly',
      status: 'Pending'
    }
  ];

  newReport = {
    title: '',
    type: '',
    status: ''
  };

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  addReport() {
    const id = 'R' + (this.reports.length + 1).toString().padStart(3, '0');

    this.reports.push({
      id,
      title: this.newReport.title,
      type: this.newReport.type,
      status: this.newReport.status
    });

    this.newReport = { title: '', type: '', status: '' };
    this.closeModal();
  }

}