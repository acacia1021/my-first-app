import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
//To use the class outside of this file too - like the app.component
export class ServerComponent{

    //You dont have to put the type here, typescript can figure it out
    serverId: number = 10;
    serverStatus: string = 'offline';

}