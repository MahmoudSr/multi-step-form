import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-indicator',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-indicator.component.html',
  styleUrl: './sidebar-indicator.component.scss',
})
export class SidebarIndicatorComponent {
  steps = [
    {
      number: 1,
      info: 'YOUR INFO',
      desc: 'STEP 1',
    },
    {
      number: 2,
      info: 'SELECT PLAN',
      desc: 'STEP 2',
    },
    {
      number: 3,
      info: 'ADD-ONS',
      desc: 'STEP 3',
    },
    {
      number: 4,
      info: 'SUMMARY',
      desc: 'STEP 4',
    },
  ];
}
