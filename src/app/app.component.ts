import { Component, OnInit } from '@angular/core'
import { TransferState } from '../modules/transfer-state/transfer-state';

@Component({
  selector: 'demo-app',
  template: `
    <h1>Universal Demo-Test {{var1}}</h1>
    abc
    <a routerLink="/">Home</a>
    <a routerLink="/lazy">Lazy</a>
    <router-outlet></router-outlet>
  `,
  styles: [
    `h1 {
      color: green;
    }`
  ]
})
export class AppComponent implements OnInit {
  public var1= 'yasarx';
  constructor(private cache: TransferState) {}
  ngOnInit() {
    this.cache.set('cached', true);
  }
}
