import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-componente',
  template: `
    <p>
      my-componente works!
    </p>
  `,
  styles: [
  ]
})
export class MyComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
