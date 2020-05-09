import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioStockAdditionComponent } from './portfolio-stock-addition.component';

describe('PortfolioStockAdditionComponent', () => {
  let component: PortfolioStockAdditionComponent;
  let fixture: ComponentFixture<PortfolioStockAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioStockAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioStockAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
