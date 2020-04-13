import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  public result: number = 0;

  constructor() { }

  ngOnInit() {
  }
  updateResult(compteur: number): void {
    this.result = compteur;
  }

}
