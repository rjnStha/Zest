import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ScrollJumpDirective } from '../../directives/scroll-jump.directive';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [
    RouterOutlet,
    ContactComponent,
    ScrollJumpDirective
  ],
  template: `
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
  `,
  styleUrls: ['./main-section.component.css',],

})
export class MainSectionComponent implements OnInit {
  constructor(private sharedService: SharedService) { }
  isOpen: boolean = false;

  ngOnInit() {
    // Subscribe to changes in the isOpen value via the service
    this.sharedService.getIsOpen().subscribe(value => {
      this.isOpen = value;
    });
  }

}
