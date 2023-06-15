import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h2>Comptador</h2>

    <h4>
      Comptador: {{ counter }}
    </h4>
    <button (click)="incressBy(+1)">+1</button>
    <button (click)="resetCounter()" >Resest</button>
    <button (click)="incressBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  incressBy( value: number): void {
    this.counter += value
  }
  resetCounter(): void {
    this.counter = 10
  }
}
