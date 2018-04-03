import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvinhaNúmeroComponent } from './advinha-número.component';

describe('AdvinhaNúmeroComponent', () => {
  let component: AdvinhaNúmeroComponent;
  let fixture: ComponentFixture<AdvinhaNúmeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvinhaNúmeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvinhaNúmeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
