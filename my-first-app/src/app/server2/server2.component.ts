import { Component } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrl: './server2.component.css'
})
export class Server2Component {
allowNewServer = false;
serverCreationStatus = 'No server created!';
serverName='';
serverCreated = false;

onCreateServer(){
this.serverCreated = true;
  this.serverCreationStatus='server is created ^_^ , the server name is ' + this.serverName; 
}
onUpdateServerName(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
}
}