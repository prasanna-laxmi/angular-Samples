import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  
  columnSpan =2;
  firstName: string= 'Prasanna';
  lastName: string ='Laxmi';
  gender :string='Female';
  age: number=23;

  showDetails: boolean= false;
  name: string ='Prasanna';

  toggleEvent():void{
    this.showDetails = !this.showDetails;
  }

}