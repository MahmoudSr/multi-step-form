import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.scss',
})
export class SelectPlanComponent implements OnInit {
  selectPlanForm!: FormGroup;
  @Input() prefillData: any;

  @Output() formValid = new EventEmitter<boolean>();
  @Output() formData = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  plans = [
    {
      name: 'Arcade',
      control: 'arcade',
      icon: '🕹️',
      prices: { Monthly: '$9/mo', Yearly: '$90/yr' },
      free: '2 months free',
    },
    {
      name: 'Advanced',
      control: 'advanced',
      icon: '🎮',
      prices: { Monthly: '$12/mo', Yearly: '$120/yr' },
      free: '2 months free',
    },
    {
      name: 'Pro',
      control: 'pro',
      icon: '👾',
      prices: { Monthly: '$15/mo', Yearly: '$150/yr' },
      free: '2 months free',
    },
  ];

  ngOnInit(): void {
    this.selectPlanForm = this.fb.group({
      selectedPlan: [null, Validators.required],
      billing: ['Monthly', Validators.required],
    });

    if (this.prefillData) {
      this.selectPlanForm.setValue(this.prefillData);
    }

    // this.formValid.emit(this.selectPlanForm.valid);
    // this.formData.emit(this.selectPlanForm.value);

    this.selectPlanForm.statusChanges.subscribe(() => {
      this.formValid.emit(this.selectPlanForm.valid);
      if (this.selectPlanForm.valid) {
        this.formData.emit(this.selectPlanForm.value);
      }
    });
  }
  selectPlan(planControl: string) {
    this.selectPlanForm.get('selectedPlan')?.setValue(planControl);
  }

  selectBilling(option: 'Monthly' | 'Yearly') {
    this.selectPlanForm.get('billing')?.setValue(option);
  }

  getPrice(plan: any): string {
    const billing = this.selectPlanForm?.get('billing')?.value || 'Monthly';
    return plan.prices[billing];
  }
}
