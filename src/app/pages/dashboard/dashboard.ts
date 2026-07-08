import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }

  // Doctor Attendance
doctorChartType: ChartType = 'doughnut';

doctorChartData: ChartConfiguration<'doughnut'>['data'] = {
  labels: ['Available', 'Not Available'],
  datasets: [{
    data: [42, 8],
    backgroundColor: ['#4CAF50', '#F44336']
  }]
};

// Weekly Patient Visits
patientChartType: ChartType = 'bar';

patientChartData: ChartConfiguration<'bar'>['data'] = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'New',
      data: [30, 35, 42, 38, 45, 50, 40],
      backgroundColor: '#42A5F5'
    },
    {
      label: 'Critical',
      data: [8, 10, 7, 9, 12, 11, 8],
      backgroundColor: '#FFA726'
    },
    {
      label: 'Emergency',
      data: [5, 6, 8, 4, 7, 9, 6],
      backgroundColor: '#EF5350'
    }
  ]
};

// Bed Availability
bedChartType: ChartType = 'doughnut';

bedChartData: ChartConfiguration<'doughnut'>['data'] = {
  labels: ['Occupied', 'Available'],
  datasets: [{
    data: [182, 48],
    backgroundColor: ['#FF7043', '#66BB6A']
  }]
};

// Inventory
inventoryChartType: ChartType = 'bar';

inventoryChartData: ChartConfiguration<'bar'>['data'] = {
  labels: ['Paracetamol', 'Insulin', 'Antibiotics', 'Saline', 'Glucose'],
  datasets: [{
    label: 'Stock (%)',
    data: [90, 65, 40, 80, 55],
    backgroundColor: '#42A5F5'
  }]
};

// Medical Tests
testChartType: ChartType = 'bar';

testChartData: ChartConfiguration<'bar'>['data'] = {
  labels: ['Blood Test', 'X-Ray', 'MRI', 'CT Scan', 'ECG'],
  datasets: [{
    label: 'Tests',
    data: [140, 95, 30, 45, 85],
    backgroundColor: '#AB47BC'
  }]
};

}