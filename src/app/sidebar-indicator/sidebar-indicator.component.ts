import { Component, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-indicator.component.html',
  styleUrl: './sidebar-indicator.component.scss',
})
export class SidebarIndicatorComponent {
  @Input() currentStep = 1;
  isMobile = false;
  backgroundUrl = '';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(max-width: 833px)'])
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.backgroundUrl = this.isMobile
          ? 'images/bg-sidebar-mobile.svg'
          : 'images/bg-sidebar-desktop.svg';
      });
  }

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
