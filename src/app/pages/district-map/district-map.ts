import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-district-map',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './district-map.html',
  styleUrls: ['./district-map.css']
})
export class DistrictMap {

  constructor(private router: Router) {}

  showModal = false;

  centers = [
    {
      id: 'H001',
      name: 'PHC - North Zone',
      beds: 20,
      stock: 'Low',
      doctors: 3,
      status: 'Critical'
    },
    {
      id: 'H002',
      name: 'CHC - Central',
      beds: 45,
      stock: 'Good',
      doctors: 8,
      status: 'Good'
    },
    {
      id: 'H003',
      name: 'PHC - South Zone',
      beds: 10,
      stock: 'Low',
      doctors: 2,
      status: 'Warning'
    }
  ];

  newCenter = {
    name: '',
    beds: '',
    stock: '',
    doctors: '',
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

  addCenter() {
    const id = 'H' + (this.centers.length + 1).toString().padStart(3, '0');

    this.centers.push({
      id,
      name: this.newCenter.name,
      beds: Number(this.newCenter.beds),
      stock: this.newCenter.stock,
      doctors: Number(this.newCenter.doctors),
      status: this.newCenter.status
    });

    this.newCenter = { name: '', beds: '', stock: '', doctors: '', status: '' };
    this.closeModal();
  }

  getColor(status: string) {
    if (status === 'Critical') return '#ff4d4d';
    if (status === 'Warning') return '#ffa500';
    return '#4caf50';
  }

}