import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-alerts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-center.html',
  styleUrls: ['./ai-center.css']
})
export class AiAlerts {

  constructor(private router: Router) {}

  showModal = false;

  alerts = [
    {
      id: 'A001',
      type: 'Stock Shortage',
      message: 'ORS stock critically low at PHC-02',
      priority: 'High'
    },
    {
      id: 'A002',
      type: 'Bed Overflow',
      message: 'ICU occupancy reaching 95% at CHC-01',
      priority: 'High'
    },
    {
      id: 'A003',
      type: 'Doctor Shortage',
      message: 'Emergency ward understaffed (only 1 doctor present)',
      priority: 'Medium'
    }
  ];

  newAlert = {
    type: '',
    message: '',
    priority: ''
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

  addAlert() {
    const id = 'A' + (this.alerts.length + 1).toString().padStart(3, '0');

    this.alerts.push({
      id,
      type: this.newAlert.type,
      message: this.newAlert.message,
      priority: this.newAlert.priority
    });

    this.newAlert = { type: '', message: '', priority: '' };
    this.closeModal();
  }

  getColor(priority: string) {
    if (priority === 'High') return 'red';
    if (priority === 'Medium') return 'orange';
    return 'green';
  }

}