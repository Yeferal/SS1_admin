import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailsOrderComponent } from './table-details-order.component';

describe('TableDetailsOrderComponent', () => {
  let component: TableDetailsOrderComponent;
  let fixture: ComponentFixture<TableDetailsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDetailsOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDetailsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
