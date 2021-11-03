import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  // Subject para emitir que se ha modificado la tabla hero desde la modal addEditHero
  modalAddEditHeroSubject = new BehaviorSubject<boolean>(false);
  modalAddEditHeroObservable = this.modalAddEditHeroSubject.asObservable();
}