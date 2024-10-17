import { CommonModule, NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [CommonModule, NgClass],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
	isMenuOpen = false;

	public isMobile: boolean = false;
	public showMobileMenu: boolean = false;
	public menuItems: string[] = [
		'Акции🔥',
		'Горячее', 'Холодное',
		'Свежая выпечка', 'Десерты',
		'Напитки', 'Горячие блюда',
		'Супы', 'Хинкали', 'Десерты',
		'Холодные закуски',
		'Салаты', 'Соусы',
	];

	@HostListener('window:resize', ['$event'])
  onResize(event: Event) {
	if (this.isBrowser()) {
		this.checkWindowWidth();
	}
}

	ngOnInit() {
		if (this.isBrowser()) {
			this.checkWindowWidth();
		}
	}

	checkWindowWidth() {
		if (this.isBrowser()) {
			this.isMobile = window.innerWidth < 1600;
		}
	}

	toggleMenu() {
		this.showMobileMenu = !this.showMobileMenu;
	}

	private isBrowser(): boolean {
		return typeof window !== 'undefined';
	}
}
