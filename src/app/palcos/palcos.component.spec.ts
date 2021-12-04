import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalcosComponent } from './palcos.component';

describe('PalcosComponent', () => {
  let component: PalcosComponent;
  let fixture: ComponentFixture<PalcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalcosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
