import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollJumpDirective } from './directives/scroll-jump.directive';
import { HeaderComponent } from './components/header/header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    SideNavComponent,
    CommonModule,
    ContactComponent,
    ScrollJumpDirective,
    HeaderComponent,
    MainSectionComponent
  ],
  template: `
  <app-header></app-header>
  <app-main-section></app-main-section>
  
  <footer class="footer">

  </footer> 
   `,
  styleUrls: ['./app.component.css',],
})

export class AppComponent{
  
}
