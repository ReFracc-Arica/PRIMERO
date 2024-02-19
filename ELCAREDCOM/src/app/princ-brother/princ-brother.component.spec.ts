import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincBrotherComponent } from './princ-brother.component';

describe('PrincBrotherComponent', () => {
  let component: PrincBrotherComponent;
  let fixture: ComponentFixture<PrincBrotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincBrotherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincBrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
