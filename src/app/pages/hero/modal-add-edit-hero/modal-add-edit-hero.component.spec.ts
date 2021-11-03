import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEditHeroComponent } from './modal-add-edit-hero.component';

describe('ModalAddEditHeroComponent', () => {
  let component: ModalAddEditHeroComponent;
  let fixture: ComponentFixture<ModalAddEditHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddEditHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddEditHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
