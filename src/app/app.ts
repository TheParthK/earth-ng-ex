import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Counter } from './counter/counter';
import { DataBinding } from './data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, DataBinding, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('earth');

  public userName: string = "Alpha";

  reverseUsername(): string {
    // console.log("reverseUsername is called!");

    let rev = ""
    for (let i = this.userName.length - 1; i >= 0; i--) {
      rev += this.userName.charAt(i)
    }
    return rev;
  }

  handler() {
    console.log("Handler clicked!");

  }

  counter = 0;

  incCounter() {
    this.counter++;
    console.log("Counter: " + this.counter)
  }


}
