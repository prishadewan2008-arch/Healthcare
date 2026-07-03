import { Component } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-stock',
  standalone: true,
  templateUrl: './stock.html'
})
export class Stock {
  constructor(public data: DataService) {}
}