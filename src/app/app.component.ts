import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-demo';
  presentDate = new Date();
  time$ = interval(1000).pipe(
    map(() => new Date())
  );
  testObject = { 
    name: 'Francis Sundiang',
    age: 20,
    food: 'Chiffon Cake'
  };
  testArray = [1, 2, 3, 4, 5];
  price: number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pompagranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  }

