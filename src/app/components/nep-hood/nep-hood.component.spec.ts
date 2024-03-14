import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NepHoodComponent } from './nep-hood.component';

describe('NepHoodComponent', () => {
  let component: NepHoodComponent;
  let fixture: ComponentFixture<NepHoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NepHoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NepHoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
