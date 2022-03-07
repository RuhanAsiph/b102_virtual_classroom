import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMaterialsComponent } from './other-materials.component';

describe('OtherMaterialsComponent', () => {
  let component: OtherMaterialsComponent;
  let fixture: ComponentFixture<OtherMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
