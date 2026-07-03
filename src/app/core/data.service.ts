import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  medicines = [
    { name: 'Paracetamol', stock: 120 },
    { name: 'ORS', stock: 18 },
    { name: 'Insulin', stock: 8 }
  ];

  getLowStock() {
    return this.medicines.filter(m => m.stock < 20);
  }

  getAIAlert() {
    return "⚠ ORS will run out in 3 days. Suggest restocking from nearby PHC.";
  }
}