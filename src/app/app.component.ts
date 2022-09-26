import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name: any[] = [];
  public nada: any;
  public outro: any;

  constructor() {
    for (let i = 0; 6 > i; ++i) {
      this.name.push({ id: i, name: 'nome ' + i });
    }
    console.log(this.name);
    this.nada = 0;
    this.outro = 0;

  }
}
