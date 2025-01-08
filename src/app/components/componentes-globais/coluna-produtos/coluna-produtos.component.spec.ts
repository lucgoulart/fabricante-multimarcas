import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaProdutosComponent } from './coluna-produtos.component';

describe('ColunaProdutosComponent', () => {
  let component: ColunaProdutosComponent;
  let fixture: ComponentFixture<ColunaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColunaProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColunaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
