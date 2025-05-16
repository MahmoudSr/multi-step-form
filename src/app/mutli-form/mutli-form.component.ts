import { Component } from '@angular/core';
import { SidebarIndicatorComponent } from '../sidebar-indicator/sidebar-indicator.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';

@Component({
  selector: 'app-mutli-form',
  standalone: true,
  imports: [SidebarIndicatorComponent, PersonalInfoComponent],
  templateUrl: './mutli-form.component.html',
  styleUrl: './mutli-form.component.scss',
})
export class MutliFormComponent {
  currentStep = 1;
}
