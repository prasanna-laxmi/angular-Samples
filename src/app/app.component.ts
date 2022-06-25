import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // styleUrls: [ './app.component.css' ]
  // template: `Your Text : <input type='text' [(ngModel)]= 'userText' />
  //                         <br/> <br/>
  //                         <app-simple [simpleInput]='userText'></app-simple>
  // `
})
export class AppComponent  {
  // name = 'Angular ' + VERSION.major;
  userText : string = 'scoriaIT';
}
