import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MutliFormComponent } from './mutli-form/mutli-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MutliFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'multi-step-form';
}
