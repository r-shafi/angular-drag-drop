import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list = [
    'List Item 1',
    'List Item 2',
    'List Item 3',
    'List Item 4',
    'List Item 5',
    'List Item 6',
    'List Item 7',
    'List Item 8',
    'List Item 9',
    'List Item 10',
  ];

  dropHandler(event) {
    console.log(event);
    const { previousIndex: from, currentIndex: to } = event;
    moveItemInArray(this.list, from, to);
  }
}
