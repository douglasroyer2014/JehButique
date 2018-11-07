import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVendaComponent } from './item-venda.component';

describe('ItemVendaComponent', () => {
  let component: ItemVendaComponent;
  let fixture: ComponentFixture<ItemVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
