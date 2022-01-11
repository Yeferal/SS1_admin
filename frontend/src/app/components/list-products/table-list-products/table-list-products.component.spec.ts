import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListProductsComponent } from './table-list-products.component';

describe('TableListProductsComponent', () => {
  let component: TableListProductsComponent;
  let fixture: ComponentFixture<TableListProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
