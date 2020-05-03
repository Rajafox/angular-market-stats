import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioActionTabComponent } from './portfolio-action-tab.component';

describe('PortfolioActionTabComponent', () => {
  let component: PortfolioActionTabComponent;
  let fixture: ComponentFixture<PortfolioActionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioActionTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioActionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
