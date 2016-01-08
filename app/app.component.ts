import {ViewEncapsulation} from 'angular2/core';
import {Component} from 'angular2/core';
import {IHero} from "./IHero";

/*
 Walkthrough https://angular.io/docs/ts/latest/tutorial/toh-pt2.html
 */

@Component({
    selector: 'my-app',
    /*Style types: http://blog.thoughtram.io/angular/2015/06/25/styling-angular-2-components.html*/
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
         }

        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 10em;
        }

        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0em;
            height: 1.6em;
            border-radius: 4px;
        }

        .heroes li.selected:hover {
            color: white;
        }

        .heroes li:hover {
            color: #607D8B;
            background-color: #EEE;
            left: .1em;
        }

        .heroes .text {
            position: relative;
            top: -3px;
        }

        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0em 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0px 0px 4px;
        }
    `],
    encapsulation: ViewEncapsulation.Native,
    template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>
    <input value="{{ hero.name }}" [(ngModel)]="hero.name" placeholder="Name"></div>
    <ul class="heroes">
        <li *ngFor="#hero of GetHeroes()" (click)="SelectHero(hero)">
            <span class="badge">{{ hero.id }}</span> {{ hero.name }}
        </li>
    </ul>
    <button (click)="AddHero()">Save</button>
    `
})

export class AppComponent {

    public HEROES: IHero[] = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
    ];

    public title = 'Tour of Heroes';

    public GetHeroes(){
        return this.HEROES;
    }

    public SelectHero(){

    }

    public hero: IHero = {
        id: 1,
        name: 'Windstorm'
    };

    public AddHero(){
        this.HEROES.push({ "id": 21, "name": "Hello" });
    }

    public UpdateId(){
        this.hero.id++;
    }
}