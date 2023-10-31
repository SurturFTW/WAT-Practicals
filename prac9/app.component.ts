import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'prac9';
  // added variables
  n: number = 4;
  presentDate: Date = new Date();
  amount: number = 20000;
  items: number[] = [1, 2, 3, 4, 5];
}