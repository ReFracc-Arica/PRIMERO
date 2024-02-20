import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KyoceraComponent } from './kyocera.component';

describe('KyoceraComponent', () => {
  let component: KyoceraComponent;
  let fixture: ComponentFixture<KyoceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KyoceraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KyoceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
