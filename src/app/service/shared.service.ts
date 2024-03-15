import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  // isOpen value updated from header component to main component
  setIsOpen(value: boolean): void {
    this.isOpenSubject.next(value);
  }
  getIsOpen(): Observable<boolean> {
    return this.isOpenSubject.asObservable();
  }

  // Transition When scrolling to the section required to implement click event
  // from header button to main section
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start', 
      inline: 'nearest' });
    }
}
