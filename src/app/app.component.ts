import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import BaseComponent from 'bootstrap/js/dist/base-component';
import { BasketComponent } from './basket/basket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppRoutingModule, RouterOutlet, BasketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AccountOwnerClient';

  @HostBinding('class') class='d-flex flex-column h-100'
}
