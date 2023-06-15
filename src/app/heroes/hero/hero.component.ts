import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 35;

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroesDescription(): string {
    return `${this.name} - ${this.age }`
  }

  changeNameHeroe(): void {

     this.name = 'Spiderman'
  }
  changeAgeHeroe(): void {
    this.age = 55
  }
  resetData(): void {
    this.name = 'ironman';
    this.age = 35
  }
}
