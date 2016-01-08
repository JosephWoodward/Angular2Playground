System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            /*
             Walkthrough https://angular.io/docs/ts/latest/tutorial/toh-pt2.html
             */
            AppComponent = (function () {
                function AppComponent() {
                    this.HEROES = [
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
                    this.title = 'Tour of Heroes';
                    this.hero = {
                        id: 1,
                        name: 'Windstorm'
                    };
                }
                AppComponent.prototype.GetHeroes = function () {
                    return this.HEROES;
                };
                AppComponent.prototype.SelectHero = function () {
                };
                AppComponent.prototype.AddHero = function () {
                    this.HEROES.push({ "id": 21, "name": "Hello" });
                };
                AppComponent.prototype.UpdateId = function () {
                    this.hero.id++;
                };
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        /*Style types: http://blog.thoughtram.io/angular/2015/06/25/styling-angular-2-components.html*/
                        styles: ["\n        .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n         }\n\n        .heroes {\n            margin: 0 0 2em 0;\n            list-style-type: none;\n            padding: 0;\n            width: 10em;\n        }\n\n        .heroes li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0em;\n            height: 1.6em;\n            border-radius: 4px;\n        }\n\n        .heroes li.selected:hover {\n            color: white;\n        }\n\n        .heroes li:hover {\n            color: #607D8B;\n            background-color: #EEE;\n            left: .1em;\n        }\n\n        .heroes .text {\n            position: relative;\n            top: -3px;\n        }\n\n        .heroes .badge {\n            display: inline-block;\n            font-size: small;\n            color: white;\n            padding: 0.8em 0.7em 0em 0.7em;\n            background-color: #607D8B;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 1.8em;\n            margin-right: .8em;\n            border-radius: 4px 0px 0px 4px;\n        }\n    "],
                        encapsulation: core_1.ViewEncapsulation.Native,
                        template: "\n    <h1>{{title}}</h1>\n    <h2>{{hero.name}} details!</h2>\n    <div><label>id: </label>{{hero.id}}</div>\n    <div><label>name: </label>\n    <input value=\"{{ hero.name }}\" [(ngModel)]=\"hero.name\" placeholder=\"Name\"></div>\n    <ul class=\"heroes\">\n        <li *ngFor=\"#hero of GetHeroes()\" (click)=\"SelectHero(hero)\">\n            <span class=\"badge\">{{ hero.id }}</span> {{ hero.name }}\n        </li>\n    </ul>\n    <button (click)=\"AddHero()\">Save</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map