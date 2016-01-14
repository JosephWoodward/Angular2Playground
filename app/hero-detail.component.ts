import {Component} from 'angular2/core';
import {IHero} from "./IHero";

@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="heroVar">
        <h2>{{heroVar.name}} details!</h2>
        <div><label>id: </label>{{heroVar.id}}</div>
        <div><label>name: </label>
        <input value="{{ heroVar.name }}" [(ngModel)]="heroVar.name" placeholder="Name"></div>
    </div>
    `,
    inputs: ['heroVar']
})

export class HeroDetailComponent {

    public hero: IHero;

}