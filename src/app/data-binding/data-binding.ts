import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  isDisabled = true;

  checkBoxFunc(e: Event) {
    (e.target as HTMLInputElement).checked ? this.isDisabled = false : this.isDisabled = true
  }


  cName: string = 's1'
  changeCName() {
    this.cName == 's1' ? this.cName = 's2' : this.cName = 's1'
  }

  perc: number = 0;
  userMarks = 0
  outOfTotal = 1

  getTotal(e: Event) {
    let tag = (e.target as HTMLInputElement).value;

    console.log(tag);
    this.outOfTotal = parseInt(tag);
    this.perc = this.userMarks / this.outOfTotal * 100

  }

  getUserMarks(e: Event) {
    this.userMarks = parseInt((e.target as HTMLInputElement).value);
    this.perc = this.userMarks / this.outOfTotal * 100
  }

  name: string = "2 way data binding";

  changeToUpperCase() {
    this.name = this.name.toUpperCase();
  }




}




// when p tag is clickec change class from s1 to s2

