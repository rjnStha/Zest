import { Directive, ElementRef, HostListener, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[scrollJump]',
  standalone: true
})
export class ScrollJumpDirective {

  // Get the reference to the element the directive is applied to 
  constructor(private el: ElementRef) { }

  // Listen to wheel event on the host element(the element the directive is applied to)
  @HostListener('wheel', ['$event'])
  onWheelScroll(event: WheelEvent) {
    // Prevent the default behavior of scrolling
    event.preventDefault();
    // Scroll to the section method 
    this.scroll(event.deltaY);
  }

  // Definite assignment assertion with !
  private startY!: number;

  // Listen to touchstart event -> first touch  
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    // Only prevent default behavior if there is a single touch
    if (event.touches.length === 1) {
      event.preventDefault();
      //Get the position of the first touch
      this.startY = event.touches[0].clientY;
    }
  }

  // Listen to touchmove event  
  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    // Only prevent default behavior if there is a single touch
    if (event.touches.length === 1) {
      event.preventDefault();
      // Calculate the difference in position 
      const deltaY = this.startY - event.touches[0].clientY;
      // Scroll to the section method 
      this.scroll(deltaY);
    }    
  }

  // Scroll down/up to the section based on scroll direction
  private scroll(deltaY: number){
    //Get all the section elements
    const sections = document.querySelectorAll('section');
    // converts sections NodeList to Array and get the index of current element
    let currentIndex = Array.from(sections).indexOf(this.el.nativeElement);

    // Calculate direction based on vertical scroll delta
    const direction = deltaY > 0 ? 1 : -1;
    // Calculate index of next section based on scroll direction
    const nextIndex = currentIndex + direction;

    // Check if valid next section
    if (nextIndex >= 0 && nextIndex < sections.length) {
      // Scroll to the section
      sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }


}
