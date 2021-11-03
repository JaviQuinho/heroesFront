import { Component, Inject, OnInit } from '@angular/core';
import { HeroETO } from 'src/app/services/hero/hero.service.interface';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddEditHeroComponent } from '../modal-add-edit-hero/modal-add-edit-hero.component';
import { SubjectService } from 'src/app/services/subject/subject.service';

/* const ELEMENT_DATA: HeroETO[] = [
  {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​id: 1, firstName: 'nombre1', lastName: 'apellidos1', heroName: 'nombre1', heroPower: 'poder1'}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​,
  {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​id: 2, firstName: 'nombre2', lastName: 'apellidos2', heroName: 'nombre2', heroPower: 'poder2'}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​,
  {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​id: 3, firstName: 'nombre3', lastName: 'apellidos3', heroName: 'nombre3', heroPower: 'poder3'}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​,
  {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​id: 4, firstName: 'nombre4', lastName: 'apellidos4', heroName: 'nombre4', heroPower: 'poder4'}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​,
  {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​id: 5, firstName: 'nombre5', lastName: 'apellidos5', heroName: 'nombre5', heroPower: 'poder4'}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
]; */

@Component({
  selector: 'app-table-hero',
  templateUrl: './table-hero.component.html',
  styleUrls: ['./table-hero.component.scss']
})
export class TableHeroComponent implements OnInit {

  dataSource: HeroETO[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'heroName', 'heroPower', 'edit'];
  

  constructor(
    // modal (usamos para cerrarla una vez hecha la petición)
    public dialog: MatDialog,
    // servicio solicitado
    private heroService: HeroService,
    // servicio solicitado
    private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.callService();
    this.subjectService.modalAddEditHeroObservable.subscribe(res => {
      this.callService();
    });
  }

  callService(): void {
    this.heroService.findAllHero().subscribe(res => {
      this.dataSource = res._embedded.heroes;
      console.log(res);
    });
  }

  editHero(element): void {
    this.dialog.open(ModalAddEditHeroComponent, {
      height: '300px',
      width: '300px',
      data: {
        hero: element,
        modalType: 'edit'
      }
    });
  }
}