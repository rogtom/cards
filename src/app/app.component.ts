import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title:'Neet Tree',
      imageURL: 'assets/tree.jpeg',
      userName: 'nature',
      content: 'I sow this tree today'
    },
    {
      title:'Snowy Mountain',
      imageURL: 'assets/mountain.jpeg',
      userName: 'mountainlover',
      content: 'Here is a picture of snowy mountain!'
    },
    {
      title:'Mountain Biking',
      imageURL: 'assets/biking.jpeg',
      userName: 'biking122223',
      content: 'I did some biking tofay'
    },
  ]
}
