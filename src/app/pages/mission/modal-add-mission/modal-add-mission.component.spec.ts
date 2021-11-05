import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddMissionComponent } from './modal-add-mission.component';

describe('ModalAddMissionComponent', () => {
  let component: ModalAddMissionComponent;
  let fixture: ComponentFixture<ModalAddMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
