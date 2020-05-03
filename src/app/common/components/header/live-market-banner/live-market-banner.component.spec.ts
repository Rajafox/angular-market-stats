import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveMarketBannerComponent } from './live-market-banner.component';

describe('LiveMarketBannerComponent', () => {
  let component: LiveMarketBannerComponent;
  let fixture: ComponentFixture<LiveMarketBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveMarketBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveMarketBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
