import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrl: './assignment2.component.css'
})
export class Assignment2Component {
studentName : string;
status='Wait to enter a Student Name!';
allowNewStudent= true;

constructor(){
	if(this.studentName !=''){
    this.allowNewStudent= false;
  }
	}

onAddedStudent(){  
  this.status='Student "' + this.studentName + '" is added!'
}

onUpdateStudentName(event: Event){
  this.studentName= (<HTMLInputElement>event.target).value;
  
}
}
