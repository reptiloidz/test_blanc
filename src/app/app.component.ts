import { Component, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import BaseComponent from 'bootstrap/js/dist/base-component';
import { BasketComponent } from './basket/basket.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [AppRoutingModule, RouterOutlet, BasketComponent, MenuComponent, CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
	title = 'AccountOwnerClient';

	@HostBinding('class') class='d-flex flex-column h-100'

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		if (this.isBrowser()) {
			const navbar = this.el.nativeElement.querySelector('nav');
		if (window.scrollY > 50) {
			this.renderer.addClass(navbar, 'scrolled');
		} else {
			this.renderer.removeClass(navbar, 'scrolled');
		}
	}
	}

	ngOnInit() {
		if (this.isBrowser()) {
			const navbar = this.el.nativeElement.querySelector('nav');
		if (window.scrollY > 50) {
			this.renderer.addClass(navbar, 'scrolled');
		} else {
			this.renderer.removeClass(navbar, 'scrolled');
		}
	}
	}

	private isBrowser(): boolean {
		return typeof window !== 'undefined';
	}
}
