import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',  //atribuite
  //selector: '.app-servers',   //class
  selector: 'app-servers',      //element
  //templateUrl: './servers.component.html',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
