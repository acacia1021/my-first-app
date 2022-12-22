import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-server',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  // template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = '';

  constructor() {
    //() means function - => does - {} this
    //, 2000ms = 2 seconds
    setTimeout(() => {
      //allowNewServer until 2 seconds reached - allowNewServer defined in html
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';

  }

  // event of type any is passed in
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
