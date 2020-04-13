import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  public compteur: number = 0;
  @Output() public newCpt: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  incremente() {
    this.compteur = this.compteur + 1;
    this.newCpt.emit(this.compteur);
  }

  decremente() {
    this.compteur = (this.compteur > 0) ? (this.compteur - 1) : (this.compteur = 0);
    this.newCpt.emit(this.compteur);
  }
}
