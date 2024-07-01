import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorteuliComponent } from './torteuli.component';

describe('TorteuliComponent', () => {
  let component: TorteuliComponent;
  let fixture: ComponentFixture<TorteuliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorteuliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TorteuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
