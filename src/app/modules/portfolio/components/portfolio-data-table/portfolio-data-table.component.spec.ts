import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDataTableComponent } from './portfolio-data-table.component';

describe('PortfolioDataTableComponent', () => {
  let component: PortfolioDataTableComponent;
  let fixture: ComponentFixture<PortfolioDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
