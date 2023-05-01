import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoclistComponent } from './voclist.component';

describe('VoclistComponent', () => {
  let component: VoclistComponent;
  let fixture: ComponentFixture<VoclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoclistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
