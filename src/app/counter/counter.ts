import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter: number = 0;

  handler1() {
    this.counter++;
  }

  handler2() {
    this.counter--;
  }

  handler(inc: boolean) {
    inc ? this.counter++ : this.counter--
  }

  // dollar event

  commonHandler(e: MouseEvent) {
    console.log("Common handler called!");
    // console.log(e);

    (e.target as HTMLElement).id == 'i' ? this.counter++ : this.counter--
    // let tag = e.target as HTMLElement
    // console.log(tag.id);

    // get value of counter from user and collect that value using $event    
  }

  textHandler(e: Event) {
    this.counter = (e.target as HTMLInputElement).valueAsNumber
  }



}
