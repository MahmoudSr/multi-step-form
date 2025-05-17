import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm!: FormGroup;
  @Output() formValid = new EventEmitter<boolean>();
  @Output() formData = new EventEmitter<any>();

  inputs = [
    {
      label: 'Name',
      type: 'text',
      control: 'name',
      placeholder: 'e.g Stephen King',
    },
    {
      label: 'Email Address',
      type: 'email',
      control: 'email',
      placeholder: 'e.g stephenking@lorem.com',
    },
    {
      label: 'Phone Number',
      type: 'text',
      control: 'phone',
      placeholder: 'e.g +1 234 567 890',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personalInfoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
    });

    this.personalInfoForm.statusChanges.subscribe((status) => {
      this.formValid.emit(this.personalInfoForm.valid);
      if (this.personalInfoForm.valid) {
        this.formData.emit(this.personalInfoForm.value);
      }
    });
  }
}
