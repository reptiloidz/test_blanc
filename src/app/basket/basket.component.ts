import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../ models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent{
}
