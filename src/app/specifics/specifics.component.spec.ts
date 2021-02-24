import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificsComponent } from './specifics.component';

describe('SpecificsComponent', () => {
  let component: SpecificsComponent;
  let fixture: ComponentFixture<SpecificsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
