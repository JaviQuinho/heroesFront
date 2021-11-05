import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MissionETO } from 'src/app/services/mission/mission.service.interface';
import { MissionService } from 'src/app/services/mission/mission.service';

@Component({
  selector: 'app-table-mission',
  templateUrl: './table-mission.component.html',
  styleUrls: ['./table-mission.component.scss']
})
export class TableMissionComponent implements OnInit, OnChanges {

  @Input() saveEventFromFather:boolean;

  dataSource: MissionETO[];
  displayedColumns: string[] = ['instructions'];

  constructor(private missionService: MissionService) {  }

  ngOnInit(): void {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
    this.callMissionService();
  }

  ngOnChanges(): void{
    if(this.saveEventFromFather){
      this.callMissionService();
    }
  }

  callMissionService(): void{
    this.missionService.findAllMission().subscribe( res => {
      this.dataSource = res._embedded.missions;
      console.log(res);
    });
  }
}