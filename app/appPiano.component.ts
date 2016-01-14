import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {IHero} from "./IHero";
import {HeroDetailComponent} from "./hero-detail.component";

/*
 Walkthrough https://angular.io/docs/ts/latest/tutorial/toh-pt2.html
 */

@Component({
    selector: 'piano-app',
    /*Style types: http://blog.thoughtram.io/angular/2015/06/25/styling-angular-2-components.html*/
    styles: [`
* {
  margin:0px;
  padding:0px;
  list-style:none;
}

:focus {
  outline:none !important;
}

body {
  background:#666;
  background:-webkit-radial-gradient(bottom left,cover,#999,#666);
  background:-moz-radial-gradient(bottom left,cover,#999,#666);
  background:-ms-radial-gradient(bottom left,cover,#999,#666);
  background:-o-radial-gradient(bottom left,cover,#999,#666);
  background:radial-gradient(bottom left,cover,#999,#666);
  height:500px;
}

a {
  color:indigo;
  text-decoration:none;
}

a:hover {
  text-decoration:underline;
}

/* Piano Wrapper */
#p-wrapper {
  background:#000;
  background:-webkit-linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);
  background:-moz-linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);
  background:-ms-linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);
  background:-o-linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);
  background:linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);
  width:1100px;
  position:relative;
  left: 20px;
  padding-left: 20px;
  -webkit-box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;
  -moz-box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;
  box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;
  border:2px solid #333;
  -webkit-border-radius:0 0 5px 5px;
  -moz-border-radius:0 0 5px 5px;
  border-radius:0 0 5px 5px;
  -webkit-animation:taufik 2s;
  -moz-animation:taufik 2s;
  animation:taufik 2s;
}

/* Tuts */
ul#piano {
  display:block;
  width:100%;
  height:240px;
  border-top:2px solid #222;
}

ul#piano li {
  list-style:none;
  float:left;
  display:inline;
  background:#aaa;
  width:40px;
  position:relative;
}

ul#piano li a,ul#piano li div.anchor {
  display:block;
  height:220px;
  background:#fff;
  background:-webkit-linear-gradient(-30deg,#f5f5f5,#fff);
  background:-moz-linear-gradient(-30deg,#f5f5f5,#fff);
  background:-ms-linear-gradient(-30deg,#f5f5f5,#fff);
  background:-o-linear-gradient(-30deg,#f5f5f5,#fff);
  background:linear-gradient(-30deg,#f5f5f5,#fff);
  border:1px solid #ccc;
  -webkit-box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);
  -moz-box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);
  box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);
  -webkit-border-radius:0 0 3px 3px;
  -moz-border-radius:0 0 3px 3px;
  border-radius:0 0 3px 3px;
}

ul#piano li a:active,ul#piano li div.anchor:active {
  -webkit-box-shadow:0 2px 2px rgba(0,0,0,0.4);
  -moz-box-shadow:0 2px 2px rgba(0,0,0,0.4);
  box-shadow:0 2px 2px rgba(0,0,0,0.4);
  position:relative;
  top:2px;
  height:216px;
}

ul#piano li a:active:before,ul#piano li div.anchor:active:before {
  content:"";
  width:0px;
  height:0px;
  border-width:216px 5px 0px;
  border-style:solid;
  border-color:transparent transparent transparent rgba(0,0,0,0.1);
  position:absolute;
  left:0px;
  top:0px;
}

ul#piano li a:active:after,ul#piano li div.anchor:active:after {
  content:"";
  width:0px;
  height:0px;
  border-width:216px 5px 0px;
  border-style:solid;
  border-color:transparent rgba(0,0,0,0.1) transparent transparent;
  position:absolute;
  right:0px;
  top:0px;
}

/* Black Tuts */
ul#piano li span {
  position:absolute;
  top:0px;
  left:-12px;
  width:20px;
  height:120px;
  background:#333;
  background:-webkit-linear-gradient(-20deg,#333,#000,#333);
  background:-moz-linear-gradient(-20deg,#333,#000,#333);
  background:-ms-linear-gradient(-20deg,#333,#000,#333);
  background:-o-linear-gradient(-20deg,#333,#000,#333);
  background:linear-gradient(-20deg,#333,#000,#333);
  z-index:10;
  border-width:1px 2px 7px;
  border-style:solid;
  border-color:#666 #222 #111 #555;
  -webkit-box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);
  -moz-box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);
  box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);
  -webkit-border-radius:0 0 2px 2px;
  -moz-border-radius:0 0 2px 2px;
  border-radius:0 0 2px 2px;
}

ul#piano li span:active {
  border-bottom-width:2px;
  height:123px;
  -webkit-box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;
  -moz-box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;
  box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;
}

/* Tooltips */
ul#piano li b {
  position:absolute;
  top:0px;
  margin-top:-10px;
  background:#111;
  color:#fff;
  font:bold 14px 'Trebuchet MS',Arial,Sans-Serif;
  border:2px solid #e6e6e6;
  -webkit-border-radius:7px;
  -moz-border-radius:7px;
  border-radius:7px;
  width:100px;
  height:30px;
  padding:10px;
  left:-40px;
  z-index:100;
  visibility:hidden;
  opacity:0;
  -webkit-box-shadow:0 2px 10px rgba(0,0,0,0.5);
  -moz-box-shadow:0 2px 10px rgba(0,0,0,0.5);
  box-shadow:0 2px 10px rgba(0,0,0,0.5);
  -webkit-transition:all 0.2s ease-out;
  -moz-transition:all 0.2s ease-out;
  -ms-transition:all 0.2s ease-out;
  -o-transition:all 0.2s ease-out;
  -transition:all 0.2s ease-out;
}

/* Tooltip Arrow */
ul#piano li b:before {
  content:"";
  display:block;
  position:absolute;
  top:100%;
  left:50px;
  border-width:8px;
  border-style:solid;
  border-color:#e6e6e6 transparent transparent transparent;
}

ul#piano li b:after {
  content:"";
  display:block;
  position:absolute;
  top:100%;
  left:53px;
  border-width:5px;
  border-style:solid;
  border-color:#111 transparent transparent transparent;
}

ul#piano li:hover b {
  visibility:visible;
  opacity:1;
  margin-top:10px;
}



ul#piano li li a:hover {
  background:#111;
  border-top-color:#222;
  border-bottom-color:#000;
}

.clear {
  clear:both;
}


/* Animation */
@-webkit-keyframes taufik {
  from {opacity:0;}
  to {opacity:1;}
}
@-moz-keyframes taufik {
  from {opacity:0;}
  to {opacity:1;}
}
@keyframes taufik {
  from {opacity:0;}
  to {opacity:1;}
}`],
    encapsulation: ViewEncapsulation.Native,
    directives: [HeroDetailComponent],
    template: `
    <div id="p-wrapper">
	<ul id="piano">
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div><span></span></li>
		<li><div class="anchor"></div></li>
	</ul>
</div>`
})

export class AppPianoComponent {

    public HEROES: IHero[] = [
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

    public selectedHero: IHero;

    public myTestProp: IHero = {
        id: 1,
        name: "Joseph Woodward"
    };

    public title = 'Tour of Heroes';

    public GetHeroes(){
        return this.HEROES;
    }

    public SelectHero(hero: IHero){
        this.selectedHero = hero;
    }

    public hero: IHero = {
        id: 1,
        name: 'Windstorm222'
    };

    public AddHero(){
        this.HEROES.push({ "id": 21, "name": "Hello" });
    }

    public UpdateId(){
        this.hero.id++;
    }
}