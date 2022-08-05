import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;

  polls = [{
    question: 'Do you like dogs or cats?',
    image: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
    votes: [0, 5, 7],
    voted: true,
  },
  {
    question: 'What month of summer do you like most?',
    image: 'https://images.pexels.com/photos/417023/pexels-photo-417023.jpeg',
    votes: [1, 3, 1],
    voted: false,
  }]
}
