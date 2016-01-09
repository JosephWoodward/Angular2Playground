import {Component} from 'angular2/core';
import {IHero} from "./IHero";

@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div><label>name: </label>
        <input value="{{ hero.name }}" [(ngModel)]="hero.name" placeholder="Name"></div>
    </div>
    `,
    inputs: ['hero']
})

export class HeroDetailComponent {

    public hero: IHero;

}