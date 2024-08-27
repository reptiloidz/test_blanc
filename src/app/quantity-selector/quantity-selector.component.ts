import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  standalone: true,
  imports: [],
  templateUrl: './quantity-selector.component.html',
  styleUrl: './quantity-selector.component.scss'
})
export class QuantitySelectorComponent {
  @Input() quantity!: number;
  @Output() quantityChange = new EventEmitter<number>();

  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target) {
      const rect = target.getBoundingClientRect();
      const clickX = event.clientX - rect.left;

      if (clickX < 30) {
        // Click on before
        this.updateQuantity(-1);
      } else if (clickX > target.clientWidth - 30) {
        // Click on after
        this.updateQuantity(1);
      }
    }

    event.stopPropagation();
  }

  updateQuantity(change: number) {
    const newQuantity = this.quantity + change;
    if (newQuantity > 0) {
      this.quantityChange.emit(newQuantity);
    }
  }
}
