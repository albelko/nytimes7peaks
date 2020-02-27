import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSortComponent } from './home-sort.component';

describe('HomeSortComponent', () => {
  let component: HomeSortComponent;
  let fixture: ComponentFixture<HomeSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
