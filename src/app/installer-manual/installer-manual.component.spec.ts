import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallerManualComponent } from './installer-manual.component';

describe('InstallerManualComponent', () => {
  let component: InstallerManualComponent;
  let fixture: ComponentFixture<InstallerManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallerManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallerManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
