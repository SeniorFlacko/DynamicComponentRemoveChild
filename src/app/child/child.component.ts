import { Component, OnInit } from '@angular/core';

export interface myinterface {
    remove(index: number);
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public index: number;
  public selfRef: ChildComponent;

  //interface for Parent-Child interaction
  public compInteraction: myinterface;

  constructor() {
  }

  removeMe(index) {
    this.compInteraction.remove(index)
  }

}