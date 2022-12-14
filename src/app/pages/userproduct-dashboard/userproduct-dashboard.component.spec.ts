import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserproductDashboardComponent } from './userproduct-dashboard.component';

describe('UserproductDashboardComponent', () => {
  let component: UserproductDashboardComponent;
  let fixture: ComponentFixture<UserproductDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserproductDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserproductDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
