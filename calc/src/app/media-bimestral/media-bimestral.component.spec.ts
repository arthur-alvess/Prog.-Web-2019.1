import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBimestralComponent } from './media-bimestral.component';

describe('MediaBimestralComponent', () => {
  let component: MediaBimestralComponent;
  let fixture: ComponentFixture<MediaBimestralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaBimestralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaBimestralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
