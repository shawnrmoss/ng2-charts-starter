/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Home } from './home';
import { LineChart } from './line-chart';
import { BarChart } from './bar-chart';
import { DoughnutChart } from './doughnut-chart';
import { RouterActive } from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.css')
  ],
  template: `
      <button router-active [routerLink]=" ['Index'] ">
        Index
      </button>
      <button router-active [routerLink]=" ['Home'] ">
        Home
      </button>
      <button router-active [routerLink]=" ['About'] ">
        About
      </button>
       <button router-active [routerLink]=" ['LineChart'] ">
        Line
      </button>
       <button router-active [routerLink]=" ['BarChart'] ">
        Bar
      </button>
       <button router-active [routerLink]=" ['DoughnutChart'] ">
        Doughnut
      </button>
      <router-outlet></router-outlet>
      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
    `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/linehchart',  name: 'LineChart',  component: LineChart },
  { path: '/barchart',  name: 'BarChart',  component: BarChart },
  { path: '/doughnutchart',  name: 'DoughnutChart',  component: DoughnutChart },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
