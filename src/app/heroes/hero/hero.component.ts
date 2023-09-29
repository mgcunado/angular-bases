import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 30;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old.`;
  }

  changeHero(): void {
    this.name = 'willy';
  }

  changeAge(): void {
    this.age = 40;
  }

  resetForm(): void {
    this.name = 'spiderman';
    this.age = 30;
  }
}
