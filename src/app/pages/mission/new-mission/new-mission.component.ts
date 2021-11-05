import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ MatDialog }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ from '@angular/material/dialog';
import { ModalAddMissionComponent } from 'src/app/pages/mission/modal-add-mission/modal-add-mission.component'

@Component({
  selector: 'app-new-mission',
  templateUrl: './new-mission.component.html',
  styleUrls: ['./new-mission.component.scss']
})
export class NewMissionComponent implements OnInit {

  @Output() saveEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  newMission(): void {
    const dialogRef = this.dialog.open(ModalAddMissionComponent, {
      height: '300px',
      width: '400px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      this.saveEvent.emit(result);
    });
  }
}
