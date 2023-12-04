import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
serverId = 1;
serverStatus = 'offline';

constructor(){
  this.serverStatus= Math.random()>0.5?'offline': 'online';
}

GetServerStatus(){
  return this.serverStatus;
}

getColor(){
  return this.serverStatus === 'online'? 'green':'red';
}
}
