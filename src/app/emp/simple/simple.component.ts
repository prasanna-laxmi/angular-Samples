import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-simple',
  // templateUrl: './simple.component.html',
  template: `You Entered : {{simpleInput}}`
})
export class SimpleComponent implements OnChanges {
  /*input decorator: data from parent to child*/
  @Input() simpleInput: string;

  /*simplechanges is an object containing current and previous values*/
  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);

      /*concatination*/
      console.log(
        propertyName + ': currentValue=' + current + 'previousValue=' + previous
      );
    }
  }
}
