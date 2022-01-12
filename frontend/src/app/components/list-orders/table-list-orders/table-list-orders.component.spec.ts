import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListOrdersComponent } from './table-list-orders.component';

describe('TableListOrdersComponent', () => {
  let component: TableListOrdersComponent;
  let fixture: ComponentFixture<TableListOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
