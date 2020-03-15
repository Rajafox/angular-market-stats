import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationBannerComponent } from './main-navigation-banner.component';

describe('MainNavigationBannerComponent', () => {
  let component: MainNavigationBannerComponent;
  let fixture: ComponentFixture<MainNavigationBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavigationBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
