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
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  buttonPressed = false;
  listOfButtonClicks = [];

  constructor() {
    //() means function - => does - {} this
    //, 2000ms = 2 seconds
    setTimeout(() => {
      //allowNewServer until 2 seconds reached - allowNewServer defined in html
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);

  }

  // event of type any is passed in
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onButtonPressed() {
    // Cleaner to simply call the opposite in the html call, or use the next section of logic
    // if (this.buttonPressed == false) {
    //   this.buttonPressed = true;
    // }
    // else if (this.buttonPressed == true) {
    //   this.buttonPressed = false;
    // }

    this.buttonPressed = !this.buttonPressed;

    // The correct way of logging the buttonPresses
    this.listOfButtonClicks.push(this.listOfButtonClicks.length + 1);
  }

}
