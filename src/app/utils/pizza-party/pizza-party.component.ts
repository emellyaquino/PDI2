import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-party',
  templateUrl: './pizza-party.component.html',
  styles: [`
  .example-pizza-party {
    color: hotpink;
  }
`],
})
export class PizzaPartyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
