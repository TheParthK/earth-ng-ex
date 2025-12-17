import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-title',
  imports: [NgIf],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class Title {

  @Input() displayHeading: string = "Welcome to Earth 🌍";
  @Input() displaySubheading: string = "This is a simple hero unit, a simple jumbotron-style component.";
  @Input() displayMessage: string = "It uses utility classes for typography and spacing.";
  @Input() displayButtonMsg: string = "Learn more";

}
