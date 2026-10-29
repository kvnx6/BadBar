import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-popularpicks',
  styleUrl: './popularpicks.css',
  templateUrl: './popularpicks.html',
})
export class Popularpicks {
  name = input.required<string>();
  country = input.required<string>();
  imgLink = input.required<string>();
}
