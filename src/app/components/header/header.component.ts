import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header class="header"  [class.header-scrolled] = "isScrolled || isOpen">
    <div class="header__content">
      <a (click)="scrollToElement('home')" class="logo" >
        <img [src]="isScrolled ? '/assets/logo_bgremoved.png':'/assets/logo_inverted.png'">
      </a>
      <nav [ngClass]= "{'nav--open':isOpen,'nav':true,'nav--scrolled':isScrolled}">
        <ul class="nav__list">
          <li *ngFor="let item of navItems">
          <a (click)="scrollToElement(item.id)" [class.active]="activeSection === item.id" class="nav__link">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
      <div (click)="toggleValue()" [class.hamburger--open]="isOpen" class="hamburger">
        <div class="hamburger__bar"></div>
        <div class="hamburger__bar"></div>
        <div class="hamburger__bar"></div>
      </div>
      
    </div> 
  </header>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  constructor(private elementRef: ElementRef, private sharedService: SharedService) { }

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'service', label: 'Services' },
    { id: 'team', label: 'Our Team' },
    { id: 'contact', label: 'Contact' }
  ];

  isOpen: boolean = false;
  isScrolled: boolean = false;
  scrollThreshold: number = 50;
  activeSection: string = 'home';
 
  ngOnInit() {
    // Check if window is defined
    if (typeof window !== 'undefined'){
      // If page refreshed maintain the conditions based on scroll
      this.isScrolled = window.scrollY > 0;
      this.detectActiveSection();
    }
  }
  
  // Change the icon image and nav properties when scrolling past threshold
  @HostListener('window:scroll', [])
  onWindowScroll() {
    //Close the nav when scrolled
    this.isOpen = false;
    this.sharedService.setIsOpen(this.isOpen);
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Required to alternate transparent and solid Nav
    if (scrollPosition > this.scrollThreshold) { this.isScrolled = true;} 
    else { this.isScrolled = false;}
    // call Scrolled Section Active method
    this.detectActiveSection();
  }

  //sets the activeSection to current Section 
  private detectActiveSection(): void {
    // select <section>
    const sections = document.querySelectorAll('section'); 
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });
    this.activeSection = currentSection;
  }

  toggleValue(): void {
    // Toggle isOpen value
    this.isOpen = !this.isOpen;
    // Update the value in the service
    this.sharedService.setIsOpen(this.isOpen);
  }

  // Call scroll method in Share Service
  scrollToElement(elementId: string): void {
    this.sharedService.scrollToElement(elementId);
    }

}
