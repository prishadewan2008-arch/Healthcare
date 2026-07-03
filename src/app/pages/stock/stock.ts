import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock.html',
  styleUrls: ['./stock.css']
})
export class Stock {

  constructor(private router: Router) {}

  showModal = false;

  medicines = [
    { id: 'M001', name: 'Paracetamol', stock: 120, minStock: 50 },
    { id: 'M002', name: 'ORS', stock: 18, minStock: 30 },
    { id: 'M003', name: 'Insulin', stock: 8, minStock: 20 }
  ];

  newMedicine = {
    name: '',
    stock: '',
    minStock: ''
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

  addMedicine() {
    const id = 'M' + (this.medicines.length + 1).toString().padStart(3, '0');

    this.medicines.push({
      id,
      name: this.newMedicine.name,
      stock: Number(this.newMedicine.stock),
      minStock: Number(this.newMedicine.minStock)
    });

    this.newMedicine = { name: '', stock: '', minStock: '' };
    this.closeModal();
  }

  isLowStock(m: any) {
    return m.stock <= m.minStock;
  }
}