import { Component } from '@angular/core';
import { SidebarIndicatorComponent } from '../sidebar-indicator/sidebar-indicator.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { CommonModule } from '@angular/common';
import { SelectPlanComponent } from '../select-plan/select-plan.component';
import { StepsWrapperComponent } from '../steps-wrapper/steps-wrapper.component';
@Component({
  selector: 'app-mutli-form',
  standalone: true,
  imports: [
    SidebarIndicatorComponent,
    PersonalInfoComponent,
    CommonModule,
    SelectPlanComponent,
    StepsWrapperComponent,
  ],
  templateUrl: './mutli-form.component.html',
  styleUrl: './mutli-form.component.scss',
})
export class MutliFormComponent {
  currentStep = 1;
  stepValidity: { [key: number]: boolean } = {};
  stepDatas: { [key: number]: any } = {};

  stepValid(step: number, isValid: boolean) {
    this.stepValidity[step] = isValid;
  }

  stepData(step: number, data: any): void {
    this.stepDatas[step] = data;
  }

  isNextDisabled(): boolean {
    return !this.stepValidity[this.currentStep];
  }

  nextStep() {
    if (this.currentStep < 4) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }
}
