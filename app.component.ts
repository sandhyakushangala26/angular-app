import { Component } from '@angular/core';
import { FoodOrderComponent } from './components/food-order/food-order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FoodOrderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assignment';
}
