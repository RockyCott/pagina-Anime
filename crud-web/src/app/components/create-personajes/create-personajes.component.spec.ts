import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonajesComponent } from './create-personajes.component';

describe('CreateEmpleadosComponent', () => {
  let component: CreatePersonajesComponent;
  let fixture: ComponentFixture<CreatePersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
