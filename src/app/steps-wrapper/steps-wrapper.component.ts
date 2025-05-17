import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './steps-wrapper.component.html',
  styleUrl: './steps-wrapper.component.scss',
})
export class StepsWrapperComponent {
  @Input() currentStep = 1;
  forms = [
    {
      title: 'Personal info',
      subtitle: 'Please provide your name, email address,  and phone number.s',
    },
    {
      title: 'Select your plan',
      subtitle: 'You have the option of monthly or yearly billing.',
    },
    {
      title: 'Pick add-ons',
      subtitle: 'Add-ons help enhance your gaming experience.',
    },
    {
      title: 'Finishing up',
      subtitle: 'Double-check everything looks OK before confirming.',
    },
  ];
}
