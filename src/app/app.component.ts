import { Component } from '@angular/core';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;
  activePoll = null;

  polls: Poll[] = [{
    id: 1,
    question: 'Do you like dogs or cats?',
    thumbnail: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
    results: [0, 5, 7],
    options: ['Cats', 'Dogs', 'None'],
    voted: true,
  },
  {
    id: 2,
    question: 'What month of summer do you like most?',
    thumbnail: 'https://images.pexels.com/photos/417023/pexels-photo-417023.jpeg',
    results: [1, 3, 1],
    options: ['june', 'july', 'august'],
    voted: false,
  },
];

setActivePoll(poll){
  this.activePoll = null;

  setTimeout(() => {
    this.activePoll = poll;
  }, 100);

}
}
