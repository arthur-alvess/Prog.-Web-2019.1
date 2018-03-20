import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSubmitComponent } from './media-submit.component';

describe('MediaSubmitComponent', () => {
  let component: MediaSubmitComponent;
  let fixture: ComponentFixture<MediaSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
