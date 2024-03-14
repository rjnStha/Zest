import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route : string;
}

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: 
  [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  template: `
    <div class="sidenav-header">
      <img [width]="profilePicSize()" [height]="profilePicSize()" src="/assets/ss.jpeg" />
      <!-- <div class="header-text" [class.hide-header-text]="sideNavCollapsed()">
          <h2>Zest</h2>
          <p> Wealth Management</p>
      </div> -->
    </div>
    <mat-nav-list>
      <a 
        mat-list-item
        class="menu-item"
        *ngFor="let item of menuItems()"
        [routerLink]="item.route"
        routerLinkActive = "selected-menu-item"
        #rla = "routerLinkActive"
        [activated]="rla.isActive"
      >
        <mat-icon [fontSet]="rla.isActive ? 'material-icons' : 'material-icons-outlined'" matListItemIcon>{{item.icon}}</mat-icon>
        <span matListItemTitle *ngIf="!sideNavCollapsed()">{{item.label}}</span>
      </a>
      <a 
        mat-list-item
        class="menu-item"
        (click)="toContact()"
        routerLinkActive = "selected-menu-item"
        #rla = "routerLinkActive"
        [activated]="rla.isActive"
      >
        <mat-icon [fontSet]="rla.isActive ? 'material-icons' : 'material-icons-outlined'" matListItemIcon>perm_phone_msg</mat-icon>
        <span matListItemTitle *ngIf="!sideNavCollapsed()">Contact</span>
      </a>
    </mat-nav-list>
  `,
  styles: [`
    :host * {
        transition: all 500ms ease-in-out;
      }

    .sidenav-header {
      padding-top: 24px;
      text-align: center;

      > img{
        border-radius: 100%;
        object-fit: cover;
        margin-bottom: 10px;
      }
    }

    .header-text{
      height: 3rem;

      > h2 {
        margin: 0;
        font-size: 1rem;
        line-height: 1.5rem;
      }

      > p {
        margin: 0;
        font-size: 0.8rem;
      }
    }

    .hide-header-text {
      opacity: 0;
      height: 0 !important;
    }

    .menu-item {
      border-left: 5px solid;
      border-left-color: rgba(0,0,0,0);
    }

    .selected-menu-item {
      border-left-color: var(--primary-color);
      background: rgba(0, 0, 0, 0.05);
    }
  `]
})
export class SideNavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label:'Home',
      route:'home',
    },
    {
      icon: 'analytics',
      label:'NepHood',
      route:'nephood'
    },
    {
      icon: 'info',
      label:'Our Team',
      route:'ourteam'
    },
  ]);

  toContact(){
    document.getElementById("contact-container")?.scrollIntoView({
      behavior:"smooth",
      block: "center"
    });
  }
  profilePicSize = computed(()=> this.sideNavCollapsed() ? '32' : '100');
}