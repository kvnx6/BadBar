import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Popularpicks } from '../../components/popularpicks/popularpicks';

@Component({
  imports: [RouterLink, Popularpicks],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected step = signal<number>(1);
}
