import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollJumpDirective } from './directives/scroll-jump.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    SideNavComponent,
    CommonModule,
    ContactComponent,
    ScrollJumpDirective
  ],
  template: `
  <header class="header"  [class.header-scrolled] = "isScrolled || isOpen">
    <div class="header__content" [ngClass]="{'companyLogo':isScrolled}">
      <a (click)="scrollToElement('home')" class="logo" >
        <img class="logo__img"  [src]="isScrolled ? '/assets/logo_bgremoved.png':'/assets/logo_inverted.png'">
      </a>
      <nav [ngClass]= "{'nav--open':isOpen,'nav':true,'nav--scrolled':isScrolled}">
        <ul class="nav__list">
          <li class="nav__item">
            <!-- awesome icon -->
            <!-- <i class="fa-solid fa-house"></i> -->
            <a (click)="scrollToElement('home')" [class.active]="activeSection === 'home'" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a (click)="scrollToElement('service')" [class.active]="activeSection === 'service'" class="nav__link">Services</a>
          </li>
          <li class="nav__item">
            <a (click)="scrollToElement('team')" [class.active]="activeSection === 'team'" class="nav__link">Our Team</a>
          </li>
          <li class="nav__item">
            <a (click)="scrollToElement('contact')" [class.active]="activeSection === 'contact'" class="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
      
      <div (click)="toggleMenu()" [class.hamburger--open]="isOpen" class="hamburger">
        <div class="hamburger__bar"></div>
        <div class="hamburger__bar"></div>
        <div class="hamburger__bar"></div>
      </div>
      
    </div> 
  </header>
  <main class="main" [class.main--nav--open]="isOpen">
    <section class="section" id="home" scrollJump style="
    background-image:url('/assets/Home_wheat.jpg');
    background-size: cover;
    background-position: center center; 
    transform: translate3d(0px, 0px, 0px);
    filter: brightness(0.8);
    ">
      <div class="home--content" style="
      padding: 20rem 20rem 20rem 20rem;
      position: relative;
      ">
        <h1 class="section--header">ZEST</h1>
      </div>
        
      <!-- <h3>
      Wealth Managment Company that specializes in NEPSE, IT, and Hospitality Management Investments.
      Protect your capital and achieve above-market ROIs with us.          
      </h3> -->
    </section>
    <section class="section"  id="service" scrollJump style="
    background-image:url('/assets/serviceWhite_edited.jpg');
    background-size: cover;
    background-position: center center; 
    transform: translate3d(0px, 0px, 0px);
    filter: brightness(0.7);
    ">
      <div class="service--content" style="padding: 20rem 20rem 20rem 20rem;">
        <h1 class="section--header" style="color: black;">SERVICES</h1>
      </div>
      <router-outlet></router-outlet>
    </section>
    <section class="section"  id="team" scrollJump>
      <h1 style="text-align: center;">OUR TEAM</h1>
    </section>
    <section class="section"  id="contact" scrollJump>
      <h1 style="color: aliceblue; text-align: center;">CONTACT</h1>
      <app-contact></app-contact>
    </section>
  </main>
  <footer class="footer">

  </footer> 
   `,
  styleUrls: ['./app.component.css',],
})

export class AppComponent implements OnInit{
  
  constructor(private elementRef: ElementRef) { }

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

  //Hamburger Menu toggle
  toggleMenu(){ 
    this.isOpen = !this.isOpen;
  }
  
  // Change the icon image and nav properties when scrolling past threshold
  @HostListener('window:scroll', [])
  onWindowScroll() {
    //Close the nav when scrolled
    this.isOpen = false;
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > this.scrollThreshold) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    // call Scrolled Section Active method
    this.detectActiveSection();
  }

  //sets the activeSection to current Section 
  private detectActiveSection() {
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

  // Transition When scrolling to the section
  scrollToElement(elementId: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    if (!element) return;
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start', 
      inline: 'nearest' });
    }
}
