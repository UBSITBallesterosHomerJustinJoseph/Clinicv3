import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, RouterModule,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clinicv2');
}
