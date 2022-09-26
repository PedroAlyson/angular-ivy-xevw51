import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name: any[] = [];
  public number: any[] = [];
  public botao: boolean;
  public nada: any;
  public outro: any;

  constructor() {
    for (let i = 0; 6 > i; ++i) {
      this.name.push({ id: i, name: 'nome ' + i });
      
    }
    this.number.push({ number: 1, points: 2 * 3 })
    this.number.push({ number: 2, points: 5 * 3 })

    let m = this.name;
    m.map((res: any) => {
      for (let i = 0; this.number.length > i; ++i) {
        if (res.id === this.number[i].number) {
          return (res.points = this.number[i].points);
        }
      }
    });
    this.botao = false;
    console.log(m);
    console.log(this.number);

    this.nada = 5;
    this.outro = 0;
  }
  count(any:any){
    let nada = this.name
    nada.filter((res:any) =>{ 
      for (let i = 0; this.number.length > i; ++i) {
      if (res.id === i) {
        return res
      }
    }})
    
    return nada.length
  }
}
