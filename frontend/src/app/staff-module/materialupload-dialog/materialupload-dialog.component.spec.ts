import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialuploadDialogComponent } from './materialupload-dialog.component';

describe('MaterialuploadDialogComponent', () => {
  let component: MaterialuploadDialogComponent;
  let fixture: ComponentFixture<MaterialuploadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialuploadDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialuploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
