import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTurmasComponent } from './consulta-turmas.component';

describe('ConsultaTurmasComponent', () => {
  let component: ConsultaTurmasComponent;
  let fixture: ComponentFixture<ConsultaTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaTurmasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
