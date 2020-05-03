import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistMainComponent } from './watchlist-main.component';

describe('WatchlistMainComponent', () => {
  let component: WatchlistMainComponent;
  let fixture: ComponentFixture<WatchlistMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
