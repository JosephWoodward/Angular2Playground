System.register(["angular2/core", "./hero-detail.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, hero_detail_component_1;
    var AppPianoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            /*
             Walkthrough https://angular.io/docs/ts/latest/tutorial/toh-pt2.html
             */
            AppPianoComponent = (function () {
                function AppPianoComponent() {
                    this.HEROES = [
                        { "id": 11, "name": "Mr. Nice111" },
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
                    this.myTestProp = {
                        id: 1,
                        name: "Joseph Woodward"
                    };
                    this.title = 'Tour of Heroes';
                    this.hero = {
                        id: 1,
                        name: 'Windstorm222'
                    };
                }
                AppPianoComponent.prototype.GetHeroes = function () {
                    return this.HEROES;
                };
                AppPianoComponent.prototype.SelectHero = function (hero) {
                    this.selectedHero = hero;
                };
                AppPianoComponent.prototype.AddHero = function () {
                    this.HEROES.push({ "id": 21, "name": "Hello" });
                };
                AppPianoComponent.prototype.UpdateId = function () {
                    this.hero.id++;
                };
                AppPianoComponent = __decorate([
                    core_1.Component({
                        selector: 'piano-app',
                        /*Style types: http://blog.thoughtram.io/angular/2015/06/25/styling-angular-2-components.html*/
                        styles: ["\n* {\n  margin:0px;\n  padding:0px;\n  list-style:none;\n}\n\n:focus {\n  outline:none !important;\n}\n\nbody {\n  background:#666;\n  background:-webkit-radial-gradient(bottom left,cover,#999,#666);\n  background:-moz-radial-gradient(bottom left,cover,#999,#666);\n  background:-ms-radial-gradient(bottom left,cover,#999,#666);\n  background:-o-radial-gradient(bottom left,cover,#999,#666);\n  background:radial-gradient(bottom left,cover,#999,#666);\n  height:500px;\n}\n\na {\n  color:indigo;\n  text-decoration:none;\n}\n\na:hover {\n  text-decoration:underline;\n}\n\n/* Piano Wrapper */\n#p-wrapper {\n  background:#000;\n  background:-webkit-linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\n  background:-moz-linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\n  background:-ms-linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\n  background:-o-linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\n  background:linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\n  width:1100px;\n  position:relative;\n  left: 20px;\n  padding-left: 20px;\n  -webkit-box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;\n  -moz-box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;\n  box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;\n  border:2px solid #333;\n  -webkit-border-radius:0 0 5px 5px;\n  -moz-border-radius:0 0 5px 5px;\n  border-radius:0 0 5px 5px;\n  -webkit-animation:taufik 2s;\n  -moz-animation:taufik 2s;\n  animation:taufik 2s;\n}\n\n/* Tuts */\nul#piano {\n  display:block;\n  width:100%;\n  height:240px;\n  border-top:2px solid #222;\n}\n\nul#piano li {\n  list-style:none;\n  float:left;\n  display:inline;\n  background:#aaa;\n  width:40px;\n  position:relative;\n}\n\nul#piano li a,ul#piano li div.anchor {\n  display:block;\n  height:220px;\n  background:#fff;\n  background:-webkit-linear-gradient(-30deg,#f5f5f5,#fff);\n  background:-moz-linear-gradient(-30deg,#f5f5f5,#fff);\n  background:-ms-linear-gradient(-30deg,#f5f5f5,#fff);\n  background:-o-linear-gradient(-30deg,#f5f5f5,#fff);\n  background:linear-gradient(-30deg,#f5f5f5,#fff);\n  border:1px solid #ccc;\n  -webkit-box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);\n  -moz-box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);\n  box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);\n  -webkit-border-radius:0 0 3px 3px;\n  -moz-border-radius:0 0 3px 3px;\n  border-radius:0 0 3px 3px;\n}\n\nul#piano li a:active,ul#piano li div.anchor:active {\n  -webkit-box-shadow:0 2px 2px rgba(0,0,0,0.4);\n  -moz-box-shadow:0 2px 2px rgba(0,0,0,0.4);\n  box-shadow:0 2px 2px rgba(0,0,0,0.4);\n  position:relative;\n  top:2px;\n  height:216px;\n}\n\nul#piano li a:active:before,ul#piano li div.anchor:active:before {\n  content:\"\";\n  width:0px;\n  height:0px;\n  border-width:216px 5px 0px;\n  border-style:solid;\n  border-color:transparent transparent transparent rgba(0,0,0,0.1);\n  position:absolute;\n  left:0px;\n  top:0px;\n}\n\nul#piano li a:active:after,ul#piano li div.anchor:active:after {\n  content:\"\";\n  width:0px;\n  height:0px;\n  border-width:216px 5px 0px;\n  border-style:solid;\n  border-color:transparent rgba(0,0,0,0.1) transparent transparent;\n  position:absolute;\n  right:0px;\n  top:0px;\n}\n\n/* Black Tuts */\nul#piano li span {\n  position:absolute;\n  top:0px;\n  left:-12px;\n  width:20px;\n  height:120px;\n  background:#333;\n  background:-webkit-linear-gradient(-20deg,#333,#000,#333);\n  background:-moz-linear-gradient(-20deg,#333,#000,#333);\n  background:-ms-linear-gradient(-20deg,#333,#000,#333);\n  background:-o-linear-gradient(-20deg,#333,#000,#333);\n  background:linear-gradient(-20deg,#333,#000,#333);\n  z-index:10;\n  border-width:1px 2px 7px;\n  border-style:solid;\n  border-color:#666 #222 #111 #555;\n  -webkit-box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);\n  -moz-box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);\n  box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);\n  -webkit-border-radius:0 0 2px 2px;\n  -moz-border-radius:0 0 2px 2px;\n  border-radius:0 0 2px 2px;\n}\n\nul#piano li span:active {\n  border-bottom-width:2px;\n  height:123px;\n  -webkit-box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;\n  -moz-box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;\n  box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;\n}\n\n/* Tooltips */\nul#piano li b {\n  position:absolute;\n  top:0px;\n  margin-top:-10px;\n  background:#111;\n  color:#fff;\n  font:bold 14px 'Trebuchet MS',Arial,Sans-Serif;\n  border:2px solid #e6e6e6;\n  -webkit-border-radius:7px;\n  -moz-border-radius:7px;\n  border-radius:7px;\n  width:100px;\n  height:30px;\n  padding:10px;\n  left:-40px;\n  z-index:100;\n  visibility:hidden;\n  opacity:0;\n  -webkit-box-shadow:0 2px 10px rgba(0,0,0,0.5);\n  -moz-box-shadow:0 2px 10px rgba(0,0,0,0.5);\n  box-shadow:0 2px 10px rgba(0,0,0,0.5);\n  -webkit-transition:all 0.2s ease-out;\n  -moz-transition:all 0.2s ease-out;\n  -ms-transition:all 0.2s ease-out;\n  -o-transition:all 0.2s ease-out;\n  -transition:all 0.2s ease-out;\n}\n\n/* Tooltip Arrow */\nul#piano li b:before {\n  content:\"\";\n  display:block;\n  position:absolute;\n  top:100%;\n  left:50px;\n  border-width:8px;\n  border-style:solid;\n  border-color:#e6e6e6 transparent transparent transparent;\n}\n\nul#piano li b:after {\n  content:\"\";\n  display:block;\n  position:absolute;\n  top:100%;\n  left:53px;\n  border-width:5px;\n  border-style:solid;\n  border-color:#111 transparent transparent transparent;\n}\n\nul#piano li:hover b {\n  visibility:visible;\n  opacity:1;\n  margin-top:10px;\n}\n\n\n\nul#piano li li a:hover {\n  background:#111;\n  border-top-color:#222;\n  border-bottom-color:#000;\n}\n\n.clear {\n  clear:both;\n}\n\n\n/* Animation */\n@-webkit-keyframes taufik {\n  from {opacity:0;}\n  to {opacity:1;}\n}\n@-moz-keyframes taufik {\n  from {opacity:0;}\n  to {opacity:1;}\n}\n@keyframes taufik {\n  from {opacity:0;}\n  to {opacity:1;}\n}"],
                        encapsulation: core_2.ViewEncapsulation.Native,
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        template: "\n    <div id=\"p-wrapper\">\n\t<ul id=\"piano\">\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div><span></span></li>\n\t\t<li><div class=\"anchor\"></div></li>\n\t</ul>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppPianoComponent);
                return AppPianoComponent;
            })();
            exports_1("AppPianoComponent", AppPianoComponent);
        }
    }
});
//# sourceMappingURL=appPiano.component.js.map