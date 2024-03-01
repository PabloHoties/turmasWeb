import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoTurmasComponent } from './edicao-turmas.component';

describe('EdicaoTurmasComponent', () => {
  let component: EdicaoTurmasComponent;
  let fixture: ComponentFixture<EdicaoTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoTurmasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdicaoTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
