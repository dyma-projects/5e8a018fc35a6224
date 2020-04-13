import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild('myInput') public el: ElementRef;
  // tslint:disable-next-line: no-inferrable-types
  public valeur: string = '';

  constructor() { }

  ngOnInit() {

  }
  leaveInput(){
    this.valeur = this.el.nativeElement.value;
  }
}
