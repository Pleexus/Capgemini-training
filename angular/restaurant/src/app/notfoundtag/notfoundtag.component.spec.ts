import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundtagComponent } from './notfoundtag.component';

describe('NotfoundtagComponent', () => {
  let component: NotfoundtagComponent;
  let fixture: ComponentFixture<NotfoundtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundtagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
