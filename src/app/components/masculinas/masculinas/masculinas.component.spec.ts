import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasculinasComponent } from './masculinas.component';

describe('MasculinasComponent', () => {
  let component: MasculinasComponent;
  let fixture: ComponentFixture<MasculinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasculinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasculinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
